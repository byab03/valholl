# VALHÖLL — OPTIMIZACIÓN PROFUNDA (criterio de diseño)

**Fecha:** 2026-09-12 (estados de decisiones actualizados 2026-09-15)
**Autor:** Sora
**Propósito:** Aplicar criterio de diseñador independiente sobre el GDD consolidado. No es resumen: es **corrección de fondo**. Detecta grietas que el propio DeepSeek no vio y las cierra con decisiones concretas.

> **Advertencia honesta:** estas son recomendaciones firmes, no órdenes. He marcado cada decisión como [CANON] (la aplico ya a los documentos) o [A DECIDIR] (requiere tu veredicto). Nada de esto toca el compendio diferido; es sobre el núcleo jugable.

---

## 1. [A DECIDIR] — EL TÍTULO Y LA PREMISA SE CONTRADICEN

**Problema:** "The Five's Odyssey" significa "La Odisea de los Cinco", pero hay **6** héroes principales (Eirik, Sigrid, Brandr, Hvitserk, Fenja, Einar).

Esto no es cosmético: es el nombre del juego y su promesa central. Un jugador que lea "Five's" y vea 6 héroes perderá confianza inmediatamente.

**Opciones (elige una):**

| Opción | Título | Lógica |
|--------|--------|--------|
| A | **Valhöll: The Six's Oath** | Coherente con 6 héroes. "Oath" (juramento) es más nórdico que "Odyssey" (griego). |
| B | **Valhöll: The Five's Odyssey** (mantener) | Requiere recortar a 5 héroes jugables (dejar uno como NPC clave). |
| C | **Valhöll: Oath of the Nine** | Coherente con "nueve reinos", tema central real del juego. |

**Mi recomendación:** Opción A o C. "Odyssey" es un término griego (Homero) que desentona con la temática nórdica; "Oath" o "Saga" encajan mejor. Y "Five" es objetivamente incorrecto si son 6.

---

## 2. [CANON] — "MIDGAR" → "MIDGARD"

**Problema:** "Midgar" es la ciudad distópica de Final Fantasy VII (© Square Enix). No solo es un error de mitología (el reino humano nórdico es **Midgard**), sino una **bomba legal**: usar un nombre registrado de otra franquicia en un juego comercial es un riesgo innecesario.

**Decisión:** se corrige a **Midgard** en todo el proyecto. Esto lo aplico directamente a los documentos.

**Impacto:** cero en gameplay, máximo en coherencia mitológica y seguridad legal.

---

## 3. [A DECIDIR] — LA MECÁNICA ESTRELLA "FURIA NÓRDICA" SE PERDIÓ

**Problema:** en el chat original, la propuesta más distintiva de DeepSeek fue el sistema de **"Furia Nórdica"**: los personajes acumulan furia al recibir daño, potenciando habilidades especiales (el Berserker entra en "estado Ragnarök"). En el GDD final **esta mecánica desapareció por completo**, sustituida por una genérica "barra de definitiva".

**Impacto:** el juego perdió su mecánica más memorable. La "barra de definitiva" es un cliché de todo JRPG; la "Furia Nórdica" era la que lo diferenciaba.

**Propuesta de recuperación (fusionada, no añadida):**

| Concepto | Regla propuesta |
|----------|-----------------|
| **Furia** | Barra única que reemplaza/augmenta la "definitiva". Se carga al recibir daño (+15%) y al atacar (+10%). |
| **Umbral de Furia** | Si el personaje está por debajo del 50% HP, la furia se acumula ×2. |
| **Ragnarök Mode** | Cuando la furia llega al 100%, la "definitiva" se potencia (la de Eirik → inmortalidad + daño masivo). |
| **Gloria o Muerte** | En furia máxima, el jugador puede elegir "arriesgar": daño ×3 pero recibe +50% daño 1 turno. |

Esto **recupera** la idea original de "dinámico" sin romper el combate por turnos. Es la diferencia entre "otro JRPG" y "un JRPG con identidad".

**Mi recomendación:** recuperarla. Es tu mecánica estrella y actualmente no existe.

---

## 4. [CANON] — VÍNCULO ÉPICO: UNA SOLA TABLA, UN SOLO NÚMERO

**Problema:** al fusionar Vínculo Divino (§9) y Guardianes Épicos (§10), quedaron **dos números distintos para el mismo guardián**:

| Guardián | Vínculo Divino (pasivo) | GE (pasivo) | Conflicto |
|----------|------------------------|-------------|-----------|
| Fenrir | +15% daño bestias | +20% daño bestias | ❌ 15 vs 20 |
| Freya | +15% curación | +20% curación | ❌ 15 vs 20 |
| Ymir | +20% HP | +30% HP | ❌ 20 vs 30 |

**Decisión:** una **única fuente de verdad**. El Vínculo Épico usa el valor **más alto** (el del GE, que era la versión más desarrollada) como pasivo base, y la "transformación" (del Vínculo Divino) como capa activa sobre él. Se elimina toda duplicación numérica.

**Tabla única resultante** (se aplica al GDD consolidado):

| Guardián | Pasivo (único) | Transformación (activa) |
|----------|----------------|-------------------------|
| Fenrir | +20% daño a bestias, +10% velocidad | +40% daño, +25% velocidad, sangrado |
| Huginn | +20% precisión, +10% crítico | +40% precisión, +25% crítico |
| Jörmungandr | +15% res. veneno, +10% defensa | +40% defensa, +25% HP, veneno |
| Ymir | +30% HP, +10% res. física | +50% HP, +25% res., aturdimiento |
| Freya | +20% curación, +10% daño mágico | +40% curación, +25% daño mágico |
| Thor | +20% daño armas 1 mano | +40% daño físico, +25% velocidad |
| Loki | +15% duración, +10% duplicar | +40% duración, +25% duplicar |
| Surtur | +20% daño fuego, +10% res. | +40% fuego, +25% resistencia |
| Hel | +20% daño no-muertos, +10% res. | +40% no-muertos, +25% resistencia |

---

## 5. [A DECIDIR] — ORO Y SKAT: DOS MONEDAS SIN JUSTIFICACIÓN

**Problema:** el GDD lista **"Oro"** (economía §6.6) y **"Skat"** (moneda §7) como dos cosas separadas. Para un jugador, tener dos monedas fiat en un RPG por turnos es confuso y no aporta.

**Opciones:**

| Opción | Regla | Ventaja |
|--------|-------|---------|
| A | **Skat único**: reemplaza al oro. Comprar, mejorar, desbloquear habilidades — todo con Skat. | Simple, coherente con "monedas vikingas" temática. |
| B | **Skat = moneda premium** (solo desbloquea habilidades); **Oro** = moneda de consumo (objetos, equipo). | Distingue progresión de consumibles, pero añade carga cognitiva. |

**Mi recomendación:** Opción A (Skat único). Menos sistemas = menos fricción, y "Skat" ya tiene identidad propia que el "Oro" genérico no aporta.

---

## 6. [A DECIDIR] — CURVA DE NIVEL ROTA (5 → 25)

**Problema:** los jefes están a niveles 5, 25, 35, 45, 55, 60. Entre Midgard (Nv.5) y Alfheim (Nv.25) hay **20 niveles de vacío** sin contenido explicado. El jugador no puede saltar de 5 a 25 sin grindeo absurdo o contenido faltante.

**Opciones:**

| Opción | Curva propuesta | Lógica |
|--------|-----------------|--------|
| A | 5 → 12 → 20 → 30 → 40 → 55 | Curva suave, 6 jefes repartidos sin saltos brutales. |
| B | Mantener 5→25→35→45→55→60, pero añadir **contenido intermedio** (mazmorras secundarias) que justifique el salto. |
| C | Recalcular jefes a 5→10→15→20→25→30 para historia principal, dejando nivel alto al postgame | Historia principal más ágil (30h), endgame profundo. |

**Mi recomendación:** Opción A (curva suave). Es la que exige menos contenido inventado y mantiene el ritmo.

---

## 7. [A DECIDIR] — "DINÁMICO" SE DESVANECIÓ EN "CLÁSICO"

**Problema:** el pitch original decía "**RPG dinámico** con nuevas ideas". El GDD final lo convirtió en "por turnos clásico, sin AP, sin grid". Se perdió la ambición que motivó el proyecto.

**Lo que aporta dinamismo sin romper el turno (elegir cuáles):**

- ✅ **Furia Nórdica** (recuperar, ver §3): la pieza central perdida.
- ✅ **Stagger** (ya está): premia foco de daño.
- ⚪ **Orden de turnos visible y manipulable** (velocidad afecta mucho): barra de iniciativa estilo FFX.
- ⚪ **Reacciones/interruptores**: un personaje puede interrumpir el turno enemigo con una habilidad.

**Mi recomendación:** recuperar Furia Nórdica (§3) + orden de turnos visible. Con eso ya tienes "dinámico" real sin sacrificar la simplicidad del turno.

---

## 8. RESUMEN DE DECISIONES

> **ACTUALIZADAS 2026-09-15:** las 7 grietas quedaron todas resueltas e incorporadas al GDD v1.3. Esta tabla es ahora registro histórico, no lista de pendientes.

| # | Tema | Estado | Resolución |
|---|------|--------|------------|
| 1 | Título "Five's" vs 6 héroes | ✅ RESUELTA | Se mantiene "The Five's Odyssey" como decisión consciente del usuario (registrada en GDD, no reabrir) |
| 2 | Midgar → Midgard | ✅ CANON | Aplicada en todo el proyecto |
| 3 | Furia Nórdica perdida | ✅ RESUELTA | Recuperada y fusionada con la barra de definitiva (GDD §7, Sistema 1) |
| 4 | Vínculo Épico doble número | ✅ CANON | Valor único (tabla GE) aplicado |
| 5 | Oro vs Skat | ✅ RESUELTA | Dos monedas con roles duros: Oro=consumibles, Skat=progresión (GDD §7, Sistema 7) |
| 6 | Curva 5→25 rota | ✅ RESUELTA | Curva suave 5→12→20→30→40→55→60 aplicada (GDD §5.2) |
| 7 | "Dinámico" perdido | ✅ RESUELTA | Furia Nórdica + iniciativa visible estilo FFX (GDD §7) |
| 8 | Corrupción narrativa (Odín) | ✅ RESUELTA | v1.3 — ver §10 |

---

## 9. MI VEREDICTO HONESTO (sin adornos)

Este juego tiene **un gancho narrativo fuerte** (dioses manipulando el destino) y **una mecánica distintiva que se perdió por el camino** (Furia Nórdica). El resto es JRPG competente pero genérico: runas + clima + vínculos son buenos sistemas, pero ninguno es "el que te hace comprar el juego".

**Si fuera mi proyecto, haría esto:**
1. **Recuperar Furia Nórdica** como mecánica central (es tu identidad).
2. **Fijar el título** correctamente (6 héroes ≠ "Five").
3. **Corregir Midgard** (legal y mitológico).
4. **Unificar a Skat único** y una tabla de vínculo única.
5. **Suavizar la curva** y construir el vertical slice del Acto I.

Con esos 5 arreglos, pasas de "un GDD con buenas ideas sueltas" a "un juego con identidad clara y construible".

---

*Decisiones 2 y 4 ya las aplico. Para las demás (1, 3, 5, 6, 7) necesito tu veredicto antes de tocar el GDD consolidado.*

---

## 10. CORRUPCIÓN NARRATIVA — GRIETA #8 (v1.3, aplicada)

**Problema:** Odín era un villano-de-nombre sin motivación. La elección final "salvar a los dioses o desatar el Ragnarök" era falsa (¿quién elegiría oprimir?). Los actos II eran "viajar y pelear" sin explorar la premisa. El final genérico ("restaurar el equilibrio") no pagaba la tensión del título.

**Corrección aplicada al GDD §5:**

| Elemento | Nuevo contenido |
|----------|-----------------|
| **Odín** | Congeló el destino (apresó a las Nornas) para evitar su muerte. Tesis: "un orden imperfecto mejor que un apocalipsis necesario". Quiere ser relevado, no vencer. |
| **Los héroes** | Hebras cortadas: borrados del telar, por eso pueden moverse en un mundo congelado. |
| **Valhöll** | El salón de almas acumuladas *sin usar*: la armería que no se atreve a abrir. |
| **Actos** | Cada uno escala una revelación: "los muertos no mueren" → "el precio del orden" → "la tesis de Odín". |
| **Odín 3 fases** | Fase 1 defiende, fase 2 te pelea con TUS consecuencias, fase 3 pide una razón. |
| **Final canónico** | Liberan a las Nornas: el Ragnarök vuelve a ser decisión, no sentencia. Equilibrio = mortalidad aceptada. |
| **Furia ↔ tema** | La Furia es el destino robado ardiendo; Gloria o Muerte = mortalidad abrazada. Jugabilidad ES narrativa. |

**Propagado a:** sinopsis + elevator pitch (GDD v1.3), tabla de actos (revelaciones), §5.3 final, §5.4 completo, finales alternativos en compendio (cada uno con su tesis). Decisiones 1/3/5/6/7 del usuario pendientes en §1-§7 siguen vigentes como están.

---

## 11. GRIETA #9 — FURIA POR ATAQUE AoE (detectada 2026-09-15, aparcada para balance)

**Hecho:** en `VH_Furia.js` la carga al atacar (+10 = `cargaAtaque*100`) se aplica **por cada target impactado** (gancho en `Game_Action.execute`). Un skill de área que golpea a 4 enemigos otorga +40 de furia en un turno.

**Opciones a decidir en el spike de balance (paso 11):**
| Opción | Regla | Efecto |
|--------|-------|--------|
| A | Carga por ataque (una vez por uso de skill/ataque) | Predecible; penaliza AoE frente a single-target |
| B | Como está: carga por target | El AoE "premia"; riesgo de inflar furia en jefes con adds |
| C | Por target pero dividida (`carga/n` o tope por turno) | Compromiso |

**Estado:** ⏸️ NO es bug (es la lectura literal del GDD: "+10% al atacar"). Queda registrada para tunear con números reales; no bloquea nada.