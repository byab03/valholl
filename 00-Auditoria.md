# VALHÖLL — AUDITORÍA Y CONSOLIDACIÓN DEL GDD

**Fecha:** 2026-09-12
**Autor:** Sora (auditoría) + usuario (decisiones)
**Entrada:** `DeepSeek-Informe Valhöll.md` (resumen + GDD original, 13050 tokens)
**Salida:** GDD consolidado (`01-GDD-Consolidado.md`)

---

## 0. CONTEXTO DE LA DECISIÓN

**Rol del usuario:** desarrollador en solitario (diseño + arte + código, todo).
**Motor elegido:** RPG Maker (prototipo 2D rápido).
**Objetivo de la sesión:** consolidar los 10+ sistemas del GDD original en un **núcleo mínimo viable** (6-7 sistemas), optimizar, corregir duplicados y contradicciones, y **sintetizar sin perder ninguna idea de fondo**.

> **Regla inviolable de esta auditoría:** nada se descarta. Toda idea del GDD original se conserva; lo que cambia es *cómo* se organiza para que sea construible por una sola persona. Lo que no entra en el núcleo queda documentado como **"sistema diferido"** (diseñado pero no parte del MVP).

---

## 1. PROBLEMAS DETECTADOS EN EL GDD ORIGINAL

| # | Problema | Gravedad | Detalle |
|---|----------|----------|---------|
| 1 | **Alcance desproporcionado** | 🔴 Crítica | 82 meses, 200+ horas, 40+ personajes, 54 jefes, 44 zonas. Inviable para un dev solo. |
| 2 | **Motor ambiguo** | 🔴 Crítica | "RPG Maker → Unity" implica migración a mitad de desarrollo (duplica trabajo). |
| 3 | **Duplicación de sistemas** | 🟠 Alta | Vínculo Divino (§9) y Guardianes Épicos (§10) hacen lo mismo. Monedas de Valhalla vs Skat coexisten sin relación. |
| 4 | **Contradicción de mecánica** | 🟠 Alta | Dice "sin AP" pero la Aurora da "+1 AP", y las runas de soporte "(AP, curación)". |
| 5 | **Exceso de mecánicas de batalla** | 🟡 Media | 16 mecánicas, varias solapadas (Reacciones ↔ Oportunidad, Combo ↔ Cadenas). |
| 6 | **Falta el pipeline técnico** | 🟡 Media | Sin mención de sprites, guardado, diálogos, audio, fórmulas de daño. |
| 7 | **Economía fragmentada** | 🟡 Media | 6 recursos + 2 monedas sin jerarquía clara de grindeo/progresión. |

---

## 2. DECISIONES DE CONSOLIDACIÓN (qué cambio y por qué)

### 2.1 Fusión de sistemas duplicados → núcleo de 7 sistemas

El GDD original tenía estos sistemas y se fusionan así:

| Sistema original | Destino en GDD consolidado | Resultado |
|------------------|---------------------------|-----------|
| **Vínculo Divino** (§9) | Se fusionan en **UN solo sistema: "Vínculo Épico"** | Una entidad divina = 1 pasiva + 1 transformación + habilidades aprendibles + invocación opcional. Elimina redundancia. |
| **Guardianes Épicos** (§10) | ↑ mismo sistema | Ídem. |
| **Runas (Rúnir)** (§8) | **Se mantiene como sistema propio** (identidad fuerte) | Sin cambios de fondo; se limpia la mención de "AP". |
| **Clima** (§6.4) | **Se mantiene como sistema** | Se clarifica: reemplaza "AP" por efectos directos. |
| **Combate + 16 mecánicas** (§6.1-6.2) | **Se consolidan en 5-6 mecánicas nucleares** | Las demás quedan como "modificadores" (variantes) agrupados. |
| **Crafteo/Alquimia** (§6.5) | **Se mantiene** | Se simplifica la tabla a 5 niveles (ya estaba). |
| **Economía + Skat + Monedas Valhalla** (§6.6, §7) | **Se unifican en UN sistema económico** | Skat = moneda universal. "Monedas de Valhalla" se absorben como recompensa de Boss Rush. |
| **Logros** (§11) | **Se difiere** | No es sistema jugable del MVP; se documenta como meta final. |
| **Postgame / Modos** (§7, §12, §13) | **Se difieren** | Documentados, no parte del MVP. |

### 2.2 El núcleo mínimo viable (7 sistemas)

```
1. Combate por turnos (con 6 mecánicas nucleares)
2. Progresión de personajes (stats, niveles, habilidades)
3. Runas (Rúnir) — equipamiento y sinergias
4. Vínculo Épico (fusión de Vínculo Divino + Guardianes Épicos)
5. Clima y clima extremo (efectos en combate y mundo)
6. Crafteo y alquimia (5 niveles)
7. Economía unificada (Skat + recursos)
```

Todo lo demás (Logros, Postgame, Boss Rush, Modo Leyenda, 40 personajes, 44 zonas, 54 jefes) se conserva **documentado como "diferido"**, intacto en un apéndice, pero fuera del MVP.

### 2.3 Resolución de la contradicción del AP

**Decisión:** se **elimina el concepto de "AP" numérico** por completo. Era un residuo de un sistema de combate previo (híbrido turno/AP) que quedó a medias.

- El clima **Aurora** ya no da "+1 AP"; da "+20% de velocidad / +20% de resistencia mágica".
- Las runas de soporte ya no listan "AP"; se convierten en runas de "velocidad/curación/crítico".
- El combate es **por turnos clásico puro**: 1 acción por turno, barra de definitiva, sin AP.

### 2.4 Consumo de mecánicas de batalla (16 → 6 + modificadores)

Las 16 mecánicas se reorganizan en **6 mecánicas nucleares** y **10 modificadores** (variantes agrupadas, no sistemas separados):

**NUCLEAR (6):**
1. Barra de definitiva.
2. Debuffs por clima.
3. Ataques combinados (dúo, si hay vínculo).
4. Stagger (ruptura de defensa).
5. Resistencias dinámicas.
6. Ataques cargados.

**MODIFICADORES (agrupados, aplicables en combate):**
- *De reacción:* Reacciones (contraataque 30%) + Ataques de oportunidad (+30% si falla).
- *De combo:* Cadenas de ataque (+5%/golpe) + Ataques de flanqueo (+20% segundo golpe).
- *De clima:* Sinergias climáticas ofensivas.
- *De estado:* Vulnerabilidad rotativa + Marcas de caza + Aliento de batalla.
- *De uso:* Mejora de habilidades por uso.
- *De defensa:* Evasión activa.

Los modificadores siguen **existiendo y documentados**, pero se implementan solo si el balance lo pide; no todos son obligatorios en el MVP.

---

## 3. RESUMEN NUMÉRICO DE LA CONSOLIDACIÓN

| Métrica | GDD original | GDD consolidado |
|---------|-------------|-----------------|
| Sistemas jugables activos | 10+ | **7** |
| Mecánicas de batalla sueltas | 16 | **6 nucleares + modificadores** |
| Monedas | 2 (Skat + Monedas Valhalla) | **1 (Skat)** |
| Contradicciones de mecánica | 1 (AP) | **0** |
| Sistemas duplicados | 2 (Vínculo Divino = GE) | **0** |
| Ideas descartadas | — | **0** (todo conservado, diferido o fusionado) |

---

## 4. LO QUE SIGUE EN ESTA SESIÓN

1. ✅ Auditoría (este documento).
2. ⬜ GDD consolidado (`01-GDD-Consolidado.md`).
3. ⬜ Definición del MVP/vertical slice (Acto I hasta el primer jefe).
4. ⬜ Arquitectura técnica RPG Maker (pipeline de sprites, diálogos, guardado, fórmulas de balance).