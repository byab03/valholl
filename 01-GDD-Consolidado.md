# VALHÖLL: THE FIVE'S ODYSSEY — GDD CONSOLIDADO

**Versión:** 1.3 (narrativa corregida)
**Fecha:** 2026-09-14 (v1.0–1.2: 2026-09-12)
**Base:** GDD original (DeepSeek, 13050 tokens) → auditoría `00-Auditoria.md` → optimización `03-Optimizacion.md`
**Regla:** Nada se descarta. Todo el contenido no-nuclear vive intacto en `02-Compendio.md`.
**Nota de título:** el usuario mantiene "The Five's Odyssey" como decisión consciente pese a los 6 héroes (ver `03-Optimizacion.md` §1); se registra para no reabrir el debate en el futuro.
**v1.3:** núcleo temático reescrito — Odín con tesis filosófica propia (§5.4), actos con revelación escalonada, final canónico reinterpretado. Ver `03-Optimizacion.md` §8.

---

# PARTE I — NÚCLEO (lo que se construye)

## 1. CONCEPTO (elevator pitch)

Un RPG 2D por turnos de mitología nórdica donde un grupo de marginados —los cuyas hebras de destino Odín cortó— descubre que el Padre de Todo **congeló el Ragnarök para no morir**, condenando a los nueve reinos a una pudrición eterna. Deben elegir entre salvar al tejedor o cortar el telar, con una mecánica que ES el tema: la **Furia Nórdica**, el destino robado ardiendo por dentro.

## 2. PILARES DE DISEÑO (3, intocables)

1. **Furia Nórdica como identidad:** el combate premia el riesgo — acumulas furia al recibir daño y puedes "arriesgar" (Gloria o Muerte) para daño masivo. Es la mecánica que distingue a Valhöll de todo JRPG genérico.
2. **Profundidad estratégica sin ser táctico:** por turnos con iniciativa visible, pero la combinación runa + vínculo + clima genera builds muy distintas. Fácil de aprender, difícil de dominar.
3. **Narrativa con consecuencias:** decisiones morales que cambian el destino de los reinos y de los personajes, sobre una identidad nórdica coherente (runas, Yggdrasil, furia, vínculos divinos).

## 3. AUDIENCIA / PLATAFORMA / MOTOR

| Aspecto | Detalle |
|---------|---------|
| Público | Fans de JRPG clásico (Final Fantasy, Octopath, Banner Saga) |
| Plataformas (aspiración) | PC (Steam) → Switch/PS/Xbox |
| Motor | **RPG Maker MZ** (JavaScript/Pixi.js, resolución 1280×720, partículas Effekseer) |

> **Decisión de motor (v1.2):** el proyecto se construye en **RPG Maker MZ** — motor publicado y estable, con ecosistema maduro de plugins y datos JSON portables. **RPG Maker U2U** (anunciado may. 2026, aún sin fecha, Unity + P2D) queda en el radar como posible destino de migración futura *solo si* convence al salir; hasta entonces, nada se bloquea por él. Se descarta RPG Maker XP y la migración a Unity casero.

## 4. BUCLE DE JUEGO (core loop)

- **30 seg:** elegir acción en combate por turnos (atacar, habilidad, objeto, defender).
- **5 min:** explorar una zona, ajustar runas/vínculo, avanzar la historia un paso.
- **1 hora:** completar un mundo (exploración + jefe + decisión narrativa que cambia el curso).

## 5. HISTORIA Y NARRATIVA (núcleo narrativo)

### 5.1 Sinopsis
Dos generaciones de héroes deben restaurar el equilibrio de Yggdrasil mientras el Ragnarök se acerca. En Midgard, un grupo de marginados descubre que **Odín congeló el destino**: apresó a las Nornas para que dejen de tejer el Ragnarök, y desde entonces el mundo no puede morir del todo ni puede vivir. Por eso los muertos no descansan (el Draugr Rey), por eso el invierno no termina, por eso ellos son "los que no debían existir": cuyas hebras Odín cortó para mantener la mentira. Deberán elegir entre **salvar al tejedor** (un orden imperfecto pero vivo) o **cortar el telar** (liberar el destino, aunque traiga el ocaso).

### 5.2 Actos (historia principal)

| Acto | Título | Mundos | Jefes | Decisión clave | Revelación del conflicto |
|------|--------|--------|-------|----------------|--------------------------|
| I | El Llamado | Midgard, Alfheim | Draugr Rey (12), Reina Ljósálfar (20) | Perdonar o matar al Cuervo de Odín | "Los muertos no pueden morir": el destino está congelado, no cumplido |
| II | Los Reinos en Guerra | Muspelheim, Niflheim | Surtur (30), Dragón de Escarcha (40) | Aliarse con gigantes o elfos / sacrificar compañero | "El precio del orden": Surtur arde eternamente sin consumirse — Odín le niega incluso su papel |
| III | El Ocaso de los Dioses | Helheim, Yggdrasil | Hela (55), Odín 3 fases (60) | Liberar o condenar espíritu / destruir o salvar Yggdrasil | "La tesis de Odín": te deja ver qué hay detrás de su caída, y depende de lo que veas |

> **Curva de nivel (decisión optimización §6):** suavizada de 5→25→35→45→55→60 a **5→12→20→30→40→55→60**, eliminando el vacío de 20 niveles entre el primer y segundo jefe. El Draugr Rey pasa de Nv.5 a Nv.12, Reina Ljósálfar de 25 a 20, Surtur de 35 a 30, Dragón de Escarcha de 45 a 40.

### 5.3 Final canónico (reinterpretado, v1.3)
Los héroes no "ganan y ya": **liberan a las Nornas y vuelven a tejer el destino**. El Ragnarök vuelve a ser *posible* — pero por primera vez es una decisión y no una sentencia. El nuevo pacto: los dioses morirán, algún día, por elección. La "restauración del equilibrio" del GDD original significa esto: **aceptar la mortalidad como precio de estar vivos**. Los finales alternativos (Renacimiento, Eterno Invierno, Tiranía, El Silencio) se documentan en `02-Compendio.md` como expansión futura, re-leídos temáticamente contra esta tesis.

### 5.4 ODÍN Y EL CONFLICTO FILOSÓFICO (núcleo temático)

**Quién es:** El Padre de Todo no es un tirano cobarde — es un padre aterrorizado que se convenció de que su cobardía es sabiduría. Bebió de la memoria de Mímir y *vio* la profecía: mientras los dioses ocupen el trono de Yggdrasil, el Ragnarök es inevitable. Así que hizo lo que cualquier gobernante haría con conocimiento perfecto y moral corrupta: no impedir el fin, sino **impedir el tiempo**.

| Componente | Contenido |
|------------|-----------|
| **Tesis de Odín** | "Un orden imperfecto es mejor que un apocalipsis necesario. Cargo con el pecado para que nueve mundos no tengan que morir." Utilitarismo divino: su crueldad es la *menor* crueldad posible. |
| **Su error** | Confunde sobrevivir con vivir. Un mundo sin destino —sin cambio— ya está muerto: solo se pudre despacio. Por eso el Draugr no descansa y el Fimbulwinter se filtra: la naturaleza se resiente del telar congelado. |
| **Qué es Valhöll (título)** | Valhöll es el salón donde Odín acumula almas *sin usarlas*: un seguro contra un Ragnarök que él mismo impidió. Una armería que no se atreve a abrir. |
| **Por qué los héroes** | Son hebras cortadas: gente cuyo destino Odín borró para que nadie pudiera cumplir la profecía. Por eso el sistema no los ve bien — y por eso son los únicos que pueden moverse en un mundo congelado. |
| **Qué quiere al final** | No vencer: **ser relevado**. Quiere que alguien le demuestre que tiene razón matándolo, o que se equivoca dejándolo vivir. Su definitiva es hacerles cargar su conocimiento: la fase 3 de la batalla es Mímir hablando por su boca. |

**Odín como batalla (3 fases = 3 posiciones filosóficas):**

| Fase | Nombre | Estilo | Lo que hace el juego |
|------|--------|--------|----------------------|
| 1 | El Padre de Todo | Orden, invocaciones de hebras | Defiende su tesis: "mirad lo que protegí". Mecánicas de control |
| 2 | El Padre Tuerto | Acusa: invoca *tu* decisión Acto II | Te pelea con tus propias consecuencias. Si sacrificaste a alguien, el sacrificio es su arma |
| 3 | El Viejo del Trono | Agotado, Gungnir, velocidad | Ya no discute. Pide que le den una razón — y el jugador la da eligiendo el destino del telar |

**El conflicto en tres voces (por qué la elección final es real):**
- **Odín (tesis):** supervivencia a cualquier precio. Defendible: detrás de su caída hay vacío visible (Ginnungagap).
- **Los héroes (antítesis):** nadie tiene derecho a decidir el destino de todos "por su bien". Pero el Acto II les muestra el costo: liberar el telar *sí* matará a alguien que quieren.
- **La síntesis (final canónico):** no salvar ni condenar a los dioses — *hacerlos mortales como todo lo demás*. El equilibrio no es el estatuto: es la conversación entre destino y elección.

> **Nota de coherencia (jugabilidad↔narrativa):** esta tesis hace que la Furia Nórdica sea temática, no cosmética: la furia es literalmente la hebra de destino cortada ardiendo en quien la lleva. "Gloria o Muerte" es la postura de los mortales frente al telar de Odín: preferir un final propio a un eterno no-destino. Y el Ragnarök Mode de Eirik es el nombre de lo que Odín teme: la muerte abrazada.

## 6. PERSONAJES (núcleo = 6)

| Personaje | Rol | Arma | Definitiva | Arco |
|-----------|-----|------|------------|------|
| **Eirik** | Berserker | Hacha | *Ragnarök Mode* (inmortalidad 3 turnos) | Vengativo, busca redención |
| **Sigrid** | Valquiria | Lanza | *Grito de Freya* (revive aliados) | Cuestiona a los dioses |
| **Brandr** | Herrero Rúnico | Martillo | *Forja de Ivaldi* (arma legendaria) | Forja su destino |
| **Hvitserk** | Chamán | Báculo | *Profecía de las Nornas* (turno extra) | Místico visionario |
| **Fenja** | Loba de Fenrir | Garras | *Liberación de Gleipnir* (CC masivo) | Lucha por su libertad |
| **Einar** | Domador de Bestias | Arco + Lazo | *Ejército de Yggdrasil* (3 bestias) | Conecta con la naturaleza |

> Los 27+ personajes de DLC y postgame se conservan íntegros en `02-Compendio.md`.

## 7. SISTEMAS NUCLEARES (7)

### SISTEMA 1 — COMBATE POR TURNOS (con FURIA NÓRDICA)

**Reglas base:**
- 1 acción por turno: atacar, habilidad, objeto, defender.
- **Orden de turnos visible (iniciativa):** barra lateral estilo FFX que muestra quién actúa después, calculada por velocidad. El jugador puede manipularla con habilidades que alteran velocidad (mecánica de "dinamismo" recuperada, optimización §7).
- **Sin AP.** Combate por turnos puro (auditoría §2.3).

**🔶 Furia Nórdica (mecánica central, recuperada):**

> **Decisión (optimización §3):** la "Furia Nórdica", la mecánica más distintiva propuesta por DeepSeek al inicio, se perdió del GDD final. Se recupera y **fusiona con la barra de definitiva** en un único sistema.

| Componente | Regla concreta |
|------------|----------------|
| **Carga de Furia** | +15% al recibir daño, +10% al atacar. |
| **Furia por riesgo** | Por debajo del 50% HP, la furia se acumula ×2 (arriesgas → cargas más rápido). |
| **Umbral 100%** | Habilidad definitiva potenciada. **Ragnarök Mode** de Eirik al 100% = inmortalidad + daño masivo. |
| **Gloria o Muerte** | En furia máxima, opción de "arriesgar": daño ×3 pero recibes +50% daño durante 1 turno. |

**6 mecánicas nucleares:**

| # | Mecánica | Regla concreta |
|---|----------|----------------|
| 1 | **Furia Nórdica** (fusión definitiva + furia) | +15% recibir daño / +10% atacar; ×2 bajo 50% HP; al 100% desata la definitiva |
| 2 | Debuffs por clima | Ver Sistema 5 |
| 3 | Ataques combinados (dúo) | 2 personajes con vínculo > 60 atacan juntos: +50% daño |
| 4 | Stagger (ruptura) | Daño acumulado en el enemigo → +50% daño recibido |
| 5 | Resistencias dinámicas | El enemigo gana +10% resistencia por golpe del mismo elemento |
| 6 | Ataques cargados | 1 turno de carga → daño ×3 al siguiente |

**Modificadores (agrupados, opcionales según balance):** reacciones/oportunidad, cadenas/flanqueo, sinergias climáticas, vulnerabilidad rotativa/marcas/aliento, mejora por uso, evasión activa. Detalle completo en `02-Compendio.md`.

### SISTEMA 2 — PROGRESIÓN DE PERSONAJES

| Atributo | Rango de arranque (Nv.1) | Crecimiento |
|----------|---------------------------|-------------|
| HP | 100–140 | +6–12 / nivel |
| Ataque | 8–14 | +2–4 / nivel |
| Defensa | 5–10 | +1–3 / nivel |
| Velocidad | 5–9 | +1–2 / nivel |
| Magia | 4–10 | +2–3 / nivel |

**Habilidades:** se desbloquean con Skat (ver Sistema 7) y mejoran con uso (modificador). Cada personaje aprende 4 habilidades base + 1 definitiva.

### SISTEMA 3 — RUNAS (Rúnir)

**Nombre:** Rúnir (singular: Rún). Símbolo: ᚱ.

| Rareza | Color | Rango de poder | Obtención |
|--------|-------|----------------|-----------|
| Común | Gris | +5–10% | Tesoros, enemigos comunes |
| Poco Común | Verde | +10–20% | Cofres ocultos, élites |
| Rara | Azul | +20–35% | Misiones principales, jefes de zona |
| Épica | Púrpura | +35–50% | Jefes principales, misiones de personaje |
| Legendaria | Dorado | +50–75% | Jefes finales, ocultos, postgame |

- **Ranuras:** 4 (ampliable a 6 con Runa de Odín).
- **Tipos:** Ofensiva, Defensiva, Soporte (velocidad/curación/crítico), Única.
- **Sinergias:** dos runas elementales opuestas combinan (+50% daño elemental).
- **Mejora:** Forja de Brandr, hasta +3.

### SISTEMA 4 — VÍNCULO ÉPICO (fusión Vínculo Divino + GE)

> **Decisión (auditoría §2.1):** Vínculo Divino y Guardianes Épicos eran el mismo sistema duplicado. Se unifican en **Vínculo Épico**: una entidad divina vincula con el héroe y otorga, en un solo marco, las 4 capas que antes estaban repartidas.

**Cada Vínculo Épico otorga:**

| Capa | Qué da | Ejemplo |
|------|--------|---------|
| **Pasiva** | Bonus siempre activo (valor único, optimización §4) | +20% daño a bestias, +10% velocidad |
| **Transformación** | Bonus temporal activo (1 vez/combate, 3 turnos) | +40% daño, +25% velocidad |
| **Invocación** | Ataque masivo / efecto en combate | Aullido de la Manada (×2 + sangrado) |
| **Habilidades aprendibles** | Se aprenden permanentemente | Garra de Lobo, Aullido de Guerra, etc. |

> **Valores únicos (optimización §4):** la fusión de Vínculo Divino (§9) y GE (§10) dejó dos números distintos para el mismo guardián (ej. Fenrir +15% vs +20%). Se fija **un único valor**: el del GE (el más desarrollado). Pasivas: Fenrir +20% bestias, Freya +20% curación, Ymir +30% HP, etc.

**Guardianes (9):** Fenrir, Huginn, Jörmungandr, Ymir, Freya, Thor, Loki, Surtur, Hel. Tabla completa de pasivas/transformaciones/invocaciones en `02-Compendio.md`.

**Progresión:** Nivel 1–70, experiencia en combate. Hitos: Nv.5 (1ª habilidad), Nv.10 (+5% pasiva), Nv.20 (2ª habilidad), Nv.30 (+20% invocación), Nv.50 (3ª habilidad), Nv.70 (máx).

### SISTEMA 5 — CLIMA Y CLIMA EXTREMO

| Clima | Combate | Mundo |
|-------|---------|-------|
| Soleado | — | Visibilidad clara |
| Lluvia | +20% agua, -20% fuego | Ríos crecen (rutas nuevas) |
| Nieve | -20% velocidad, +20% hielo | Caminos bloqueados |
| Tormenta | -30% precisión, +30% rayo | Visibilidad reducida |
| Niebla | -20% precisión, +20% esquiva | Enemigos ocultos |
| Cenizas | -2% HP/turno, +30% fuego | Zonas quemadas |
| Aurora | +20% velocidad, +20% res. mágica | Eventos especiales |
| T. de Hielo | -50% velocidad, -50% precisión | Zonas congeladas |
| Fuego del Crepúsculo | -5% HP/turno, +50% fuego | Zonas devastadas |

> **Corrección (auditoría §2.3):** la Aurora ya no da "+1 AP" (el AP no existe); da velocidad + resistencia mágica.

### SISTEMA 6 — CRAFTEO Y ALQUIMIA

| Nivel | Requisito | Crea |
|-------|-----------|------|
| 1 Básico | — | Pociones menores, armas de hierro |
| 2 Intermedio | 5 recetas | Pociones mayores, armas de acero |
| 3 Avanzado | 10 recetas | Élixires, armas rúnicas |
| 4 Épico | 20 recetas | Armas legendarias, runas avanzadas |
| 5 Legendario | 30 recetas | Armas de dioses, runas primordiales |

**Materiales:** Hierba de Luz, Raíz de Escarcha, Flor de Fuego, Polvo de Estrellas, Ceniza de Gigante, Esencia de Vacío. Detalle de usos en `02-Compendio.md`.

### SISTEMA 7 — ECONOMÍA (Oro + Skat, roles separados)

> **Decisión (optimización §5):** el usuario mantiene **dos monedas con roles claros**, en lugar de unificarlas. Cada una cumple una función distinta para evitar la confusión de dos monedas fiat intercambiables.

| Moneda | Rol | Obtención | Uso |
|--------|-----|-----------|-----|
| **Oro** | Consumibles | Enemigos, cofres, misiones, venta | Comprar objetos, equipo, mejorar armas/armadura |
| **Skat** (🪙) | Progresión | Misiones (principal 3–5, secundaria 1–2, oculta 2–3, especial 4–6) | Desbloquear habilidades (básica 1, intermedia 2, avanzada 3, definitiva 5, mejora 2/nivel) |

> La regla mnemotécnica: **el Oro se gasta (consumibles), el Skat se invierte (progresión)**. No son intercambiables, así que cada una tiene identidad y propósito propios.

**Recursos (no-monetarios):**

| Recurso | Obtención | Uso |
|---------|-----------|-----|
| Fragmentos Rúnicos | Enemigos rúnicos, desencantar | Forjar/mejorar runas |
| Almas de Héroes | Jefes, misiones de personaje | Mejorar armas/habilidades |
| Materiales de Forja | Mundo, minas | Mejorar equipamiento |

---

## 8. MVP / VERTICAL SLICE (lo mínimo jugable que prueba los pilares)

**Alcance del MVP = Acto I completo, hasta y con el primer jefe.**

| Elemento | Contenido mínimo |
|----------|------------------|
| Mundos | 1 (Midgard) |
| Personajes | 3 de los 6 (Eirik, Sigrid, Fenja) |
| Jefes | 1 (Draugr Rey, Nv.12) |
| Sistemas | Los 7 nucleares en versión funcional mínima |
| Runas | 5 runas de ejemplo (1 por rareza baja) |
| Vínculo | 1 (Fenrir, para demostrar el sistema) |
| Combate | 6 mecánicas nucleares, con **Furia Nórdica** como protagonista demostrada en el jefe |
| Narrativa | Prólogo + gancho de la profecía + primera decisión |
| Duración | 30–45 min de juego |

**Criterio de éxito del MVP:** un jugador nuevo entiende los 3 pilares (estrategia runa+vínculo+clima, narrativa con consecuencia, identidad nórdica) **y experimenta la Furia Nórdica** (el momento "¡quiero más!") en 45 minutos.

## 9. RIESGOS Y DEPENDENCIAS

| Riesgo | Mitigación |
|--------|------------|
| Alcance (dev solo) | Vertical slice primero; todo lo demás diferido y congelado |
| Arte pixel 16-bit | Empezar con tilesets/placeholders, refinarlos al final |
| Balance numérico | Fórmulas base definidas aquí (§7-Sistema 2); iterar en prototipo |
| Música nórdica | Placeholders libres hasta poder encargar composición |
| Autenticidad mitológica | Investigación en curso; nombres futuros revisables |

---

*Continúa en `02-Compendio.md`: todo el contenido conservado (DLCs, 40+ personajes, 54 jefes, postgame, modos, logros, diálogos, balance de Vínculo Épico completo).*