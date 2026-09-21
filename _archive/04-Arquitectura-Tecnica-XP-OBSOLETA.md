# VALHÖLL — ARQUITECTURA TÉCNICA (RPG Maker XP)

**Versión:** 1.0
**Fecha:** 09/12/2026
**Motor objetivo:** RPG Maker XP (RGSS / Ruby 1.8), el motor que ya conoces por Essentials 21.1.
**Estado de tu equipo:** no detecté RPG Maker instalado en rutas estándar de Windows. Esto lo defino **agnóstico a la versión exacta** para que lo montes cuando instales el motor. Si ya lo tienes en una ruta no estándar, dímelo y ajusto.

> **Por qué XP y no MZ/MV:** conoces Ruby por Essentials 21.1, tienes mentalidad de scripts RGSS, y XP es ideal para pixel art 16-bit con tilesets grandes. La experiencia se transfiere directa.

---

## 1. PIPELINE DE SPRITES

### 1.1 Especificación de resolución

| Elemento | Especificación |
|----------|----------------|
| Resolución de pantalla | 640×480 (nativa XP) |
| Tile | 32×32 px |
| Sprite de personaje (mapa) | 32×48 px por frame (4 dir × 4 frames = hoja de 128×192) |
| Retrato de diálogo | 96×96 px (busto) o 192×192 (retrato grande) |
| Battler (combate) | 144×144 px mínimo, fondo transparente |
| Icono de runa | 24×24 px (o 32×32 para legibilidad) |

### 1.2 Paleta (identidad nórdica)

| Rol | Colores |
|-----|---------|
| Base fría | Azul acero (#5B78A0), gris niebla (#8A8F98) |
| Acento cálido | Rojo sangre (#A63A2E), fuego (#C85A2A) |
| Élite | Dorado (#D4AF37), plata (#C0C0C0) |
| Oscuridad | Azul noche (#1A2233), negro grafito (#20242E) |

Regla: **mezcla máximo 2 cálidos + 2 fríos por sprite**, con el dorado reservado a runas/jefes/equipo legendario para que el loot caro se distinga de un vistazo.

### 1.3 Flujo de producción (para dev solo)

1. **Placeholders grises** (solo silueta + color base) → montas el sistema sin esperar arte.
2. **Sprite funcional** (animación de 4 frames por dirección) → el juego ya se siente vivo.
3. **Sprite final** (shading, outline, detalles) → solo cuando la mecánica está validada.

> **Regla de oro:** nunca hagas el sprite final antes de validar la mecánica. El 80% del pixel art de un proyecto muere por hacerse prematuramente.

### 1.4 Naming convention (sin excepciones)

```
char_eirik_idle.png        →  char_<nombre>_<pose>.png
face_sigrid_neutral.png    →  face_<nombre>_<expresion>.png
batt_eirik_attack.png      →  batt_<nombre>_<accion>.png
icon_runa_fuego.png        →  icon_runa_<elemento>.png
tile_midgard_floor.png     →  tile_<mundo>_<tipo>.png
```

---

## 2. SISTEMA DE DIÁLOGOS

### 2.1 Datos (separar texto de código)

Los diálogos viven **fuera del código**, en archivos de texto plano que un script carga. Esto te permite iterar el guion sin tocar una línea de Ruby.

**Formato de archivo (`Data/dialogos/acto1.txt`):**
```
# id: actor | expresion | texto
E1|neutral|La profecía de las Nornas no mentía.
S1|sorprendida|¿Los dioses traicionaron a los mortales?
E1|colerico|Entonces el Ragnarök es nuestra única salida.
# opcion: elegir el destino del Cuervo
CHOICE|Perdonar al Cuervo|Matar al Cuervo
```

**Estructura del parser:**
- `#` al inicio = comentario / marcador de sección.
- `CHOICE|...` = bifurcación (guarda rama en una variable).
- `cond:<variable>:<estado>` = diálogo condicional (si la decisión anterior fue "matar", cambia la línea).

### 2.2 Motor de render

- Ventana de diálogo de 4 líneas máx., con retrato (`face_*.png`) a la izquierda.
- **Auto-avance** con un botón, saltar con otro.
- Registro de **variables de decisión** (`$game_variables[ID]`) para ramificar la historia sin duplicar guiones.

### 2.3 Consecuencias narrativas (pilar #3)

Cada decisión escribe en una variable global:
- `$game_variables[10]` = decisión del Cuervo (1=perdonar, 2=matar).
- `$game_variables[11]` = aliarse (1=gigantes, 2=elfos).
- `$game_variables[12]` = sacrificio de compañero (0=nadie, 1..6).

Estas variables se leen en: diálogos posteriores, recompensas, jefes opcionales, y el final. Todo el sistema de "narrativa con consecuencias" es **un array de variables**, no scripts dispersos.

---

## 3. SISTEMA DE GUARDADO

### 3.1 Qué se guarda (snapshot completo)

| Bloque | Contenido |
|--------|-----------|
| Partida | Nivel de cada héroe, HP/MP actual, stats |
| Equipamiento | Arma, armadura, runas equipadas (4-6 ranuras) |
| Inventario | Objetos, oro, skat, recursos de crafteo |
| Vínculo Épico | Guardián vinculado + nivel + habilidades aprendidas |
| Furia | Estado de la barra de furia (si aplica fuera de combate) |
| Variables de historia | Todas las decisiones (`$game_variables[10..N]`) |
| Mundo | Mapa actual, coordenadas, clima activo |

### 3.2 Formato

- **Archivo por slot** (`Save/slot1.rvdata`), serializado con `Marshal.dump` de Ruby (nativo de XP, cero dependencias).
- **Guardado automático** tras cada decisión clave y cada jefe (para no perder historia por cierre inesperado).

### 3.3 Reglas de diseño

- **Guardar en cualquier punto fuera de combate** (RPG clásico, sin fricción).
- **Sin guardado dentro de combate** (regla estándar; evita estados corruptos).
- Guardar **una firma de versión** en el save para detectar saves antiguos tras actualizaciones.

---

## 4. FÓRMULAS NUMÉRICAS DE BALANCE

> Estas fórmulas son la **columna vertebral** del juego. Sin números concretos, "equilibrado" es un eslogan. Con estas fórmulas puedes calcular cada golpe desde el día 1.

### 4.1 Progresión de stats (por nivel, rango)

| Atributo | Base Nv.1 | Crecimiento/nivel | Máximo Nv.60 |
|----------|-----------|-------------------|--------------|
| HP | 120 | +10 | ~710 |
| Ataque | 12 | +3 | ~189 |
| Defensa | 8 | +2 | ~126 |
| Velocidad | 7 | +1.5 | ~96 |
| Magia | 8 | +2.5 | ~156 |

> Ajusta por rol: Berserker tiene +30% ataque y -20% defensa base; Chamán +40% magia y -20% HP.

### 4.2 Fórmula de daño físico

```
daño = (Atq_atacante × 1.0) − (Def_objetivo × 0.5)
daño = daño × multiplicador_elemental   (debilidad ×1.5, resistencia ×0.5)
daño = daño × multiplicador_clima       (ver §4.6)
daño = daño × factor_aleatorio          (0.85–1.15)
daño = daño × (1 + furia/400)           (furia potencia el daño, pilar #1)
daño_mínimo = Atq_atacante × 0.15       (nunca 0)
```

### 4.3 Fórmula de daño mágico

```
daño = Magia_atacante × poder_habilidad × 1.2
daño = daño − (Magia_objetivo × 0.3)
daño aplica multiplicadores elemental/clima/aleatorio igual que físico
```

### 4.4 Fórmula de curación

```
cura = Magia_curandero × poder_habilidad × 0.8
cura = cura × (1 + bonus_vínculo_Freya)   (ej. +20%)
```

### 4.5 Precisión, crítico, evasión

```
prob_acierto = 0.90 + (Vel_atacante − Vel_objetivo) × 0.002   (cap 0.65–0.99)
prob_crítico = 0.05 + runas (máx 0.30)
prob_evasión = 0.05 + clima/estado (máx 0.40)
```

### 4.6 Tabla de multiplicadores de clima (aplicada al daño)

| Clima | Multiplicador elemental |
|-------|------------------------|
| Lluvia | Agua ×1.2, Fuego ×0.8 |
| Nieve | Hielo ×1.2, Velocidad ×0.8 |
| Tormenta | Rayo ×1.3, Precisión ×0.7 |
| Cenizas | Fuego ×1.3, HP -2%/turno |
| Aurora | Magia res. ×1.2 |

> Esto es la **misma tabla** del GDD, ahora en forma de multiplicador computable, no solo descriptivo.

### 4.7 Furia Nórdica (pilar #1, fórmula)

```
furia = furia + 15  (al recibir daño, por golpe)
furia = furia + 10  (al atacar)
si HP < 50%: furia acumula ×2
si furia ≥ 100: "Ragnarök Mode" disponible (definitiva potenciada)
"Gloria o Muerte": daño ×3, recibes +50% daño 1 turno (elección del jugador)
furia se resetea a 0 tras usar la definitiva
```

### 4.8 XP y nivel

```
xp_necesaria = 25 × (nivel_actual)² × 1.1
```
- Nv.5 → ~690 XP; Nv.12 → ~3,960; Nv.20 → ~11,000; Nv.55 → ~83,000; Nv.60 → ~99,000.
- Los jefes dan XP fija + bonificación según dificultad, para que la **curva suave** (5→12→20→30→40→55→60) se sostenga sin grindeo.

---

## 5. ESTRUCTURA DE SCRIPTS (RGSS)

```
Scripts/
├── Valhall_Main.rb             # bucle y bootstrap
├── Valhall_Combate.rb          # turnos, iniciativa, formulas daño
├── Valhall_Furia.rb             # pilar #1 (furia, Ragnarök, Gloria o Muerte)
├── Valhall_Clima.rb             # clima activo + multiplicadores
├── Valhall_Runas.rb             # equipamiento, sinergias, mejora
├── Valhall_Vinculo.rb           # vínculo épico (pasiva/transformación/invocación)
├── Valhall_Dialogos.rb          # parser de Data/dialogos/*.txt
├── Valhall_Guardado.rb          # Marshal snapshot + firma versión
├── Valhall_Economia.rb          # oro, skat, recursos
└── Valhall_Balance.rb           # constantes de fórmulas (§4) en un solo lugar
```

**Regla de arquitectura:** `Valhall_Balance.rb` es la **única fuente de verdad** de todos los números. Ningún script hardcodea un valor; todos leen de aquí. Cambiar el balance = editar un solo archivo.

---

## 6. HITOS DE CONSTRUCCIÓN (vertical slice)

| Hito | Entregable | Verifica |
|------|-----------|----------|
| H1 | Motor base + 1 personaje camina en Midgard | Movimiento + tileset cargado |
| H2 | Combate por turnos con iniciativa visible | 1 pelea genérica funciona |
| H3 | **Furia Nórdica** implementada | Furia carga, se activa, Ragnarök |
| H4 | Runas equipables (5 de ejemplo) | Bonus de runa se aplica al daño |
| H5 | Vínculo Fenrir (pasiva + transformación) | Bonus de vínculo se aplica |
| H6 | Diálogos ramificados (decisión del Cuervo) | Variable de historia cambia el diálogo |
| H7 | Guardado completo | Cargar guarda = estado idéntico |
| H8 | Jefe Draugr Rey (Nv.12) | Pelea balanceada + clima + furia |
| H9 | Clima activo en Midgard | El clima cambia el multiplicador |

**Orden estricto H1→H9.** Cada hito se valida antes de pasar al siguiente. No se salta.

---

## 7. DECISIONES PENDIENTES PARA EMPEZAR A CODIAR

1. **¿Versión exacta de RPG Maker?** Confirmada XP, pero necesito saber si ya la tienes instalada (y dónde) o si hay que adquirirla.
2. **¿RGSS puro o con algún framework?** Recomiendo RGSS puro (control total, ya lo conoces); Essentials es un fork pesado y no aplica a un RPG de narrativa nórdica.
3. **¿Tilesets?** Necesitas un tileset base nórdico (puedo ayudarte a buscar assets libres → ver `02-Compendio.md` §14 o recursos CC0 de vikingos).

---

*Este documento es la base para empezar a construir. El siguiente paso práctico es el Hito H1: motor base + personaje caminando en Midgard.*