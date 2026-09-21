# VALHÖLL — ARQUITECTURA TÉCNICA (RPG Maker MZ)

**Versión:** 1.0
**Fecha:** 2026-09-12
**Motor:** RPG Maker MZ (JavaScript ES6 + Pixi.js + Effekseer)
**Propósito:** puente entre el GDD consolidado y el código real. Cada sistema del núcleo tiene aquí su mapeo concreto al motor.
**Regla de diseño técnico:** *datos fuera del código, lógica en plugins modulares.* Si U2U u otro motor llega algún día, los JSON se migran; el código es lo único que se reescribe.

---

## 1. FICHA TÉCNICA DEL MOTOR (lo que MZ te da / te quita)

| Parámetro | Valor MZ | Impacto en Valhöll |
|-----------|----------|--------------------|
| Resolución base | 1280×720 | Sprites 4× más grandes que XP; pixel art debe escalarse con Nearest Neighbour |
| Tiles | 48×48 | Tilesets nuevos o escalar los RTP ×1.5 con cuidado |
| Personajes | 48×48 (8 dir. posible con plugin) | Tus 6 héroes en 4 direcciones por defecto |
| Battlers | 320×320 aprox. | Los jefes pueden ser grandes; ventaja sobre XP |
| Scripting | JavaScript (plugin params + common events) | Mucho más accesible que RGSS; ecosistema enorme |
| Batalla por defecto | Turnos front-view/side-view, AG-RTBS opcional | Base perfecta para Furia + iniciativa |
| Partículas | Effekseer integrado | Efectos de Furia/transformaciones sin spritesheets |
| Save | Slots JSON vía `DataManager` | Skats, runas, vínculos y decisiones: todo serializable |

**Lo que MZ NO trae y hay que construir (nuestros plugins propios):**
1. Sistema de Furia Nórdica (barra + umbral 50% HP + Gloria o Muerte).
2. Barra de iniciativa visible (orden de turnos anticipado).
3. Slots de runas con sinergias.
4. Vínculo Épico (pasiva + transformación + invocación + aprendibles).
5. Clima global con efectos en combate.
6. Skat como segunda moneda con tienda de habilidades.

---

## 2. ARQUITECTURA DE PLUGINS (convención del proyecto)

```
js/plugins/
  VH_Core.js        → config global, utilidades, ganchos compartidos
  VH_Furia.js       → Sistema 1: barra de furia, ragnarök, gloria/muerte
  VH_Iniciativa.js  → Sistema 1: orden de turnos anticipado (HUD + manipulación)
  VH_Runas.js       → Sistema 3: slots, sinergias, forja
  VH_Vinculo.js     → Sistema 4: guardianes, transformaciones, invocaciones
  VH_Clima.js       → Sistema 5: clima mundial + modifiers de combate
  VH_Craft.js       → Sistema 6: recetas y niveles de alquimia
  VH_Skat.js        → Sistema 7: moneda de progresión + tienda de habilidades
  VH_Dialogos.js    → diálogos ramificados con persistencia de decisiones
  VH_Tutorial.js    → onboarding interactivo (Acto I)
```

**Reglas:**
- Prefijo `VH_` en todo; una clase global por plugin (`VH.Furia`, `VH.Runas`...).
- Config de balance **nunca hardcodeada**: vive en `data/VH_Config.json`.
- Cada plugin expone `VH.<Sistema>.params()` leído desde el JSON → balancear sin tocar código.
- Orden de carga: Core → todo lo demás → Dialogos/Tutorial al final.
- No tocar `rmmz_*.js` del motor directamente (dificulta updates); alias/overwrite en nuestros plugins.

---

## 3. ESQUEMAS DE DATOS (el corazón portable)

### 3.1 `data/VH_Runas.json`
```json
{
  "E_FUEGO_1": {
    "nombre": "Rún de Fuego", "rareza": 1, "tipo": "ofensiva",
    "elemento": "fuego", "efecto": { "stat": "pAtk", "mod": 0.08 },
    "sinergia": ["HIELO"], "descrizione_short": "+8% daño físico"
  }
}
```
- `rareza`: 1..5 (Común→Legendaria). `mod` en % decimal.
- `sinergia`: array → al equipar opuestos complementarios, aplica bono extra.
- Slots por equipo en `notetag` MZ: `<vhSlots:4>` (ampliable a 6 con Runa de Odín vía flag).

### 3.2 `data/VH_Vinculos.json`
```json
{
  "FENRIR": {
    "nombre": "Fenrir", "capa": "bestia",
    "pasiva":  { "effects": [{ "stat": "pAtkVsBestia", "mod": 0.20 }, { "stat": "agi", "mod": 0.10 }] },
    "transform": { "duracionTurnos": 3, "mod": [{ "stat": "pAtk", "mod": 0.40 }, { "stat": "agi", "mod": 0.25 }], "estadoAnexo": "sangrado", "vecesPorCombate": 1 },
    "invocacion": { "skillId": 201, "nombre": "Aullido de la Manada" },
    "aprendibles": [ { "skillId": 202, "nivelGE": 5 }, { "skillId": 203, "nivelGE": 20 }, { "skillId": 204, "nivelGE": 50 } ],
    "expNiveles": [0,500,1500,5000,10000,30000,60000]
  }
}
```
→ Una sola fuente de verdad (los valores únicos de la optimización §4).

### 3.3 `data/VH_Furia.json`
```json
{
  "cargaAtaque": 0.10, "cargaDañoRecibido": 0.15,
  "umbralRiesgo": 0.50, "multiplicadorRiesgo": 2.0,
  "gloriaMuerte": { "bonusDaño": 3.0, "penalizacion": 0.50, "duracionTurnos": 1 },
  "ragnarokEirik": { "inmortalTurnos": 3 }
}
```

### 3.4 `data/VH_Clima.json`
```json
{
  "TORMENTA": { "prec": -0.30, "elemBonus": { "rayo": 0.30 }, "icono": 12, "nombre": "Tormenta" }
}
```

### 3.5 Decisiones narrativas — `VH_Historia.json` (persistido en save)
```json
{
  "flags": { "cuervoPerdonado": true, "gigantesAliados": false },
  "capituloActual": "I-3",
  "skatGastadosHabilidades": { "EIRIK": [101, 102] }
}
```
- Regla: **toda** decisión narrativa es un flag nombrado en un solo objeto. Los diálogos leen/escriben aquí. Cero variables dispersas del editor → auditable, migrable.

---

## 4. SISTEMA DE COMBATE — mapeo a MZ

### 4.1 Furia Nórdica (VH_Furia.js)
- Variable de instancia en `Game_Battler`: `_vhFuria` (0..100).
- Hooks (alias a métodos del motor):
  - `Game_Battler.gainHp(loss)` → si loss>0: `furia += 15 * (hp%<50% ? 2 : 1)`
  - `Game_Action.execute()` post-ataque → `furia += 10`
- A 100: habilita skill definitiva (condition: `furia>=100` en notetag `<vhRequireFuria:100>`), **y** añade opción "Gloria o Muerte" al menú de batalla (command window extendido).
- HUD: barra propia en `Window_VH_Furia` (clase nueva, pintada en la escena de batalla; Effekseer al llenarse).
- **Sin plugin ajeno obligatorio**: son ~200 líneas. MZ base da los hooks suficientes.

### 4.2 Iniciativa visible (VH_Iniciativa.js)
- Al empezar ronda: pre-calcular orden completo con `agi` + modificadores → array `vhTurnQueue`.
- Ventana lateral con iconos retratos (estilo FFX), actualizada cuando algo altera `agi` (buff/debuff → reordena cola y se muestra).
- El "dinamismo" sin grid: manipular velocidad enemiga (Hvitserk) **cambia el orden visible** → el jugador ve las consecuencias de sus debuffs.
- Opción pragmática: plugin comunitario **Alpha Turn Order** como base, customizar HUD encima. Evaluar en spike 1.

### 4.3 Stagger / combos / resistencia dinámica
- Stagger: contador acumulado en enemigo (`_vhStagger`); al superar umbral → state "Roto" (+50% daño, 2 turnos).
- Resistencias dinámicas: mapa `{elementoId: resistAcumulada}` por enemigo; +10% por golpe repetido del mismo elemento (funciona con `elementRate` extendido).
- Todo parametrizado en `VH_Combat.json` para tuneo sin código.

### 4.4 Fórmulas de balance (base — `VH_Formulas`)
```
Daño físico = (a.pAtk × multHabilidad − b.pDef × 0.5) × rand(0.94–1.06) × (1+vFuria) × (1+vRunas) × staggerMult × climaMult
Daño mágico = (a.mAtk × mult − b.mDef × 0.5) × ... idem
Curación    = a.mAtk × mult × (1 + bonoFreya)
EXP enemigo = baseNivel^1.6 × coefRiesgo ; EXP necesaria nivel N = 20 × N^2.2
```
- Multiplicadores apilados como objeto (no sumas sueltas) → debuggeable en un solo `VH.debug.damage(a,b)`.
- Regla: **todo número de balance vive en JSON**, nunca en un plugin. Cambiar balance no debe requerir leer JS.

---

## 5. OVERLAYS EN MAPA — Clima (VH_Clima.js)

- Zona actual define clima por tabla + evento común horario (cambio cada X pasos o al entrar a subzona).
- Efecto visual: overlay de pantalla (Tint + Pictures para nieve/lluvia) o partículas Effekseer (mejor; ya integradas en MZ para weather propio).
- El clima **no es solo cosmético**: `VH.Clima.mods()` se inyecta en las fórmulas de daño/precisión (§4.4) y en spawns de enemigos ocultos (Niebla).
- Persistencia: `vhClimaZona` en save → el mundo "recuerda" su clima (Fimbulwinter avanza en la historia).

## 6. ECONOMÍA (VH_Skat.js) — dos monedas, roles duros

| Implementación | Detalle |
|----------------|---------|
| Oro | `gold` nativo del motor. Shops estándar = consumibles/equipo. |
| Skat | Variable del sistema `VH_SKAT` + comando de menú "Árbol de Skat" (skate-window nuevo). Sin shops con Skat fuera del árbol. |
| Anti-confusión UX | Icono 🪙 distinto, colores distintos (Oro amarillo / Skat azul hielo), tooltips aclaran "moneda de juramentos". |
| Habilidades | Cada skill tiene `skatCost` en notetag; el árbol valida requisitos por nivel y orden. |

## 7. GUARDADO Y GUARDAS DE COHERENCIA (VH_Core.js)

- `DataManager.makeSaveData/extractSaveData` extendidos → serializan: furia por personaje,GE levels, runas equipadas (incl. +N), cola de decisiones, clima.
- **Guarda de integridad:** al cargar, `VH.validate()` compara IDs contra JSONs actuales; si un ID de runa no existe (tras update de balance), loguea y usa fallback seguro — nunca crash silencioso.
- Autosave en hitos de capítulo + manual ilimitado (JRPG moderno, sin castigar al jugador).

## 8. PIPELINE DE ARTE

| Asset | Especificación MZ | Herramienta |
|-------|-------------------|-------------|
| Tilesets | 48×48, formato MZ (no reusar de XP) | Aseprite |
| Héroes | 48×48×(4 dir × 9 frames) sheets | Aseprite + Character Generator base |
| Battlers | hasta 600×600 (héroes), jefes hasta 800 | Aseprite / escalado |
| FX Furia | Effekseer (rojo/dorado, pulso cardíaco) | Effekseer editor (gratis) |
| Transformaciones | swap de battler + tinte + FX | ya soportado en VH_Vinculo |
| Menús | 9-slice, paleta nórdica (azules/grises/rojos/dorados del GDD) | Editar gráficos del sistema MZ |

**Regla:** carpeta `_psd`/`_ase` ORIGINAL fuera del proyecto; el proyecto solo contiene PNGs exportados. Evita corromper fuente de arte.

## 9. SONIDO

- Estructura: `audio/bgm|se|voice`. Música por (zona, clima, situación de furia>80%) — 3 capas.
- Placeholders libres: Kevin MacLeod (Viking era), OpenGameArt "Nordic" (mencionados en tu investigación). Sustituir por compositor propio post-MVP.

## 10. ORDEN DE CONSTRUCCIÓN DEL MVP (Acto I — Midgard)

| # | Paso | Entrega verificable |
|---|------|---------------------|
| 1 | Proyecto base + JSONs de config + Core | Andar en Midgard placeholder |
| 2 | VH_Furia + HUD | Golpear/recibir daño llena barra; definitiva dispara |
| 3 | VH_Iniciativa | Cola visible estable + 1 buff que reordena |
| 4 | Runas equipables + 5 runas | Cambiar stats visible en menú |
| 5 | Vínculo Fenrir (1 solo) | Transformación funcional 3 turnos |
| 6 | Clima (2 climas: Soleado/Nieve) | Overlays + modifiers activos |
| 7 | Skat + árbol de Eirik | Desbloquear 2 habilidades con Skat |
| 8 | Crafteo nivel 1 | 3 pociones crafteables |
| 9 | Draugr Rey (jefe Nv.12) con stagger + invocaciones | Combate completo balanceado |
| 10 | Diálogo + decisión Cuervo + guardado/coherencia | Cerrar y retomar sin romper nada |
| 11 | Tutorial embebido + balance pass | Un extraño juega 45 min sin explicarte nada |

**Criterio de "done":** un amigo juega el Acto I sin ayuda, muere ≤3 veces en el jefe, y pregunta "¿y el resto?".

## 11. RIESGOS TÉCNICOS (honestos)

| Riesgo | Mitigación |
|--------|------------|
| MZ no soporta bien "acciones dobles" del ataque combinado (dúo) | Implementar como skill con múltiples `damage` targets; spike 2 temprano |
| Ecosistema de plugins = dependencia de terceros | Nuestros 10 plugins VH son propios; usar ajeno solo donde ahorre >1 semana (Alpha Turn Order) |
| Effekseer tiene curva de aprendizaje | Degradar a weather nativo MZ + tint si frena el MVP |
| 1280×720 con pixel art 48px = decisiones de escala estrictas | Fix: Nearest Neighbour siempre; probar en 1080p y 720p desde el día 1 |
| U2U puede hacer obsoleto el motor | Los JSONs §3 son el activo real; migrar diseño > migrar código |

---

## 12. DOCUMENTOS DEL PROYECTO (estado final)

| Archivo | Rol |
|---------|-----|
| `00-Auditoria.md` | Por qué se consolidó así |
| `01-GDD-Consolidado.md` | **QUÉ** es el juego (v1.3, motor MZ) |
| `02-Compendio.md` | Todo lo diferido, intacto |
| `03-Optimizacion.md` | Decisiones de fondo (7 grietas) |
| `04-ArquitecturaMZ.md` | **CÓMO** se construye (este documento) |
| `_archive/04-Arquitectura-Tecnica-XP-OBSOLETA.md` | 🗄️ Versión XP descartada por la decisión de motor v1.2. No usar como referencia (specs 640×480/32px incompatibles con MZ). |

Siguiente paso natural: **spike 1** (proyecto MZ real con VH_Core + Furia funcional) — cuando tengas MZ instalado, lo montamos.