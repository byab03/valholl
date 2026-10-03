# VALHÖLL — COMPENDIO DIFERIDO (contenido conservado)

**Propósito:** todo el contenido del GDD original que NO es parte del MVP se conserva aquí intacto. Nada se descarta: esto es el "banco de ideas" al que recurrir cuando el núcleo esté terminado.

--- 

## 🌟 1. VISIÓN GENERAL
Valhöll: The Five's Odyssey es un RPG 2D de temática nórdica, con combate por turnos, barra de definitivas, sistema de runas, clanes, crafteo, clima dinámico y una narrativa épica que abarca dos generaciones de héroes.
- **Género:** RPG 2D por turnos (transición a 2.5D HD-2D en Unity)
- **Temática:** Mitología nórdica, dos generaciones de héroes
- **Plataformas:** PC (Steam), consolas (Switch, PlayStation, Xbox)
- **Motor:** RPG Maker (prototipo 2D) → Unity (versión final 2.5D HD-2D)
- **Duración total estimada:** 197–246 horas (historia principal + 5 DLCs + postgame + Boss Rush)
- **Público objetivo:** Amantes de RPGs clásicos con profundidad narrativa y estratégica (ej: Final Fantasy, Octopath Traveler, The Banner Saga).

---

## 🎨 2. EVOLUCIÓN VISUAL: DE 2D A 2.5D HD-2D

### 2.1 FASE 1: PROTOTIPO EN RPG MAKER (2D CLÁSICO)
| Aspecto | Detalle |
|---------|---------|
| Motor | RPG Maker MZ o MV. |
| Estilo visual | 2D clásico con tilesets de 16x16 o 32x32 píxeles, vista cenital (top-down). |
| Propósito | Desarrollar la historia, sistemas básicos, combate, diálogos, misiones y pruebas de jugabilidad. |
| Ventaja | Rápido de prototipar, ideal para pruebas de concepto y narrativa. |

### 2.2 FASE 2: VERSIÓN FINAL EN UNITY (2.5D HD-2D)
| Aspecto | Detalle |
|---------|---------|
| Motor | Unity con renderizado 2.5D (HD-2D). |
| Estilo visual | Inspirado en Octopath Traveler y otros juegos HD-2D. |
| Características | Perspectiva 2.5D con profundidad de campo, iluminación dinámica, sombras, partículas y efectos de post-procesado (desenfoque de profundidad, bloom, niebla volumétrica). |
| Propósito | Dar una identidad visual única y moderna al juego, manteniendo la esencia pixel art. |

### 2.3 TECNOLOGÍAS Y HERRAMIENTAS PARA 2.5D
| Herramienta | Uso |
|-------------|-----|
| Unity URP (Universal Render Pipeline) | Renderizado 2.5D con iluminación y efectos. |
| Tilemap + Grid | Para mapas en 2.5D con profundidad. |
| Cinemachine | Cámaras con seguimiento y efectos de profundidad. |
| Shader Graph | Efectos de iluminación, niebla, desenfoque. |
| Post-Processing Stack | Bloom, DOF (desenfoque de profundidad), corrección de color. |
| Sprites con capas | Para simular profundidad y perspectiva. |

---

## 📚 3. ESTRUCTURA DEL JUEGO

### 3.1 HISTORIA PRINCIPAL
- **Mundos:** 6 (Midgard, Alfheim, Muspelheim, Niflheim, Helheim, Yggdrasil)
- **Jefes:** 6 (únicos)
- **Personajes jugables:** 6
- **Niveles:** 1–100
- **Duración:** 30–40 horas

### 3.2 DLCs
| DLC | Mundos | Jefes | Personajes | Niveles | Duración |
|-----|--------|-------|------------|---------|----------|
| DLC 1: Dark Gods | 5 | 5 | 7 | 1–70 | 18–22 h |
| DLC 2: Asgard on Ice | 5 | 5 | 7 | 1–70 | 20–24 h |
| DLC 3: Ragnarök | 5 | 5 | 7 | 1–70 | 24–28 h |
| DLC 4: Echoes of the Past | 5 | 5 | 8 | 70–120 | 22–26 h |
| DLC 5: Twilight of the Legacy | 7 | 7 | 10 | 70–120 | 30–40 h |

### 3.3 POSTGAME
- **Zonas postgame:** 15
- **Jefes postgame:** 15 (exclusivos)
- **Misiones postgame:** 15
- **Logros postgame:** 18
- **Objetos postgame:** 23
- **Modo Leyenda:** New Game+ con dificultad aumentada
- **Horas adicionales:** 50–60 horas

### 3.4 MODOS BOSS RUSH
| Modo | Jefes | Requisito | Dificultad |
|------|-------|-----------|------------|
| Boss Rush Normal | 34 jefes (33 principales + Valhall's Guardian) | Completar historia principal + DLCs 1–5 | Media-Alta |
| Boss Rush+ | 68 jefes (33 principales + 33 ocultos + Valhall's Guardian+ + The Primordial One) | Derrotar a todos los jefes ocultos | Extremadamente Alta |

**Totales globales:**
- Mundos totales: 33 (historia) + 15 (postgame) = 48
- Jefes totales: 33 principales + 33 ocultos + 15 postgame = 81
- Personajes jugables: 45 únicos (con repeticiones en DLCs)
- Duración total: 197–246 horas

---

## 👥 4. PERSONAJES (DETALLADOS)

### 4.1 HISTORIA PRINCIPAL (6)
| Personaje | Rol | Arma | Habilidad Definitiva | Personalidad / Arco |
|-----------|-----|------|----------------------|---------------------|
| Eirik | Berserker | Hacha | Ragnarök Mode (inmortalidad 3 turnos) | Vengativo, orgulloso. Busca redimir su pasado. |
| Sigrid | Valquiria | Lanza | Grito de Freya (revive aliados) | Leal, compasiva. Cuestiona a los dioses. |
| Brandr | Herrero Rúnico | Martillo | Forja de Ivaldi (arma legendaria) | Sabio, meticuloso. Forja su propio destino. |
| Hvitserk | Chamán | Báculo | Profecía de las Nornas (turno extra) | Místico, visionario. Ve más allá del presente. |
| Fenja | Loba de Fenrir | Garras | Liberación de Gleipnir (CC masivo) | Salvaje, leal. Lucha por su libertad. |
| Einar | Domador de Bestias | Arco + Lazo | Ejército de Yggdrasil (invoca 3 bestias) | Pacífico, observador. Conecta con la naturaleza. |

### 4.2 DLC 1 – DARK GODS (7)
| Personaje | Rol | Arma | Habilidad Definitiva | Personalidad / Arco |
|-----------|-----|------|----------------------|---------------------|
| Björn (fijo) | Heredero | Espada + Escudo | Legado de Sangre | Valiente, decidido. Hijo del héroe original. |
| Astor (fijo) | Explorador | Arco + Dagas | Flecha del Caos | Ágil, astuto. Hermano de Björn. |
| Hel | Nigromante | Guadaña | Toque de la Muerte | Fría, pragmática. Busca redimir su reino. |
| Vidar | Dios del Silencio | Espada de sombras | Silencio Eterno | Estoico, vengativo. Odia a Odín. |
| Nyx | Diosa de la Noche | Cuchillas lunares | Manto de Sombras | Misteriosa, juguetona. Habla en acertijos. |
| Móði | Dios de la Ira | Mazo eléctrico | Furia de Thor | Impulsivo, orgulloso. Hijo de Thor. |
| Sigyn | Diosa de la Lealtad | Escudo + daga | Juramento Eterno | Leal, compasiva. Esposa de Loki. |

### 4.3 DLC 2 – ASGARD ON ICE (7)
| Personaje | Rol | Arma | Habilidad Definitiva | Personalidad / Arco |
|-----------|-----|------|----------------------|---------------------|
| Björn (fijo) | Heredero | Espada + Escudo | Legado de Sangre | Valiente, decidido. |
| Astor (fijo) | Explorador | Arco + Dagas | Flecha del Caos | Ágil, astuto. |
| Skadi | Cazadora de Hielo | Arco de escarcha | Tormenta de Invierno | Independiente, salvaje. |
| Ullr | Dios del Esquí | Hachas gemelas | Deslizamiento Divino | Precavido, astuto. |
| Hrimnir | Gigante de Hielo | Mazo de cristal | Grito de Escarcha | Orgulloso, taciturno. |
| Skaði | Cazadora de Niebla | Arco de niebla | Flecha Fantasma | Sigilosa, vengativa. |
| Nótt | Diosa de la Noche Polar | Lazo de sombras | Abrazo de la Noche | Melancólica, profunda. |

### 4.4 DLC 3 – RAGNARÖK (7)
| Personaje | Rol | Arma | Habilidad Definitiva | Personalidad / Arco |
|-----------|-----|------|----------------------|---------------------|
| Björn (fijo) | Heredero | Espada + Escudo | Legado de Sangre | Valiente, decidido. |
| Astor (fijo) | Explorador | Arco + Dagas | Flecha del Caos | Ágil, astuto. |
| Surtr | Gigante de Fuego | Espada de llamas | Crepúsculo Ardiente | Brutal, con código de honor. |
| Loki | Dios del Engaño | Dagas ilusorias | Caos Tejido | Astuto, impredecible. |
| Váli | Dios de la Venganza | Espada de cenizas | Juramento de Sangre | Frío, calculador. |
| Sif | Diosa de la Cosecha | Guadaña dorada | Cosecha de Almas | Sabia, maternal. |
| Mimir | Dios de la Sabiduría | Cráneo parlante | Memoria del Mundo | Sabio, irónico. |

### 4.5 DLC 4 – ECHOES OF THE PAST (8)
| Personaje | Rol | Arma | Habilidad Definitiva (mejorada) |
|-----------|-----|------|----------------------------------|
| Eirik (mejorado) | Berserker | Hacha | Ragnarök Mode (5 turnos) |
| Sigrid (mejorado) | Valquiria | Lanza | Grito de Freya (revive con 80% HP) |
| Brandr (mejorado) | Herrero Rúnico | Martillo | Forja de Ivaldi (3 batallas) |
| Hvitserk (mejorado) | Chamán | Báculo | Profecía de las Nornas (2 turnos extra) |
| Fenja (mejored) | Loba de Fenrir | Garras | Liberación de Gleipnir (2 turnos) |
| Einar (mejorado) | Domador de Bestias | Arco + Lazo | Ejército de Yggdrasil (4 bestias) |
| Kára | Valquiria de la Venganza | Lanza de almas | Grito de los Caídos (revive 1 aliado) |
| Vili | Dios de la Voluntad | Martillo de runas | Voluntad de Hierro (inmune 5 turnos) |

### 4.6 DLC 5 – TWILIGHT OF THE LEGACY (10)
| Personaje | Rol | Arma | Habilidad Definitiva (mejorada) |
|-----------|-----|------|----------------------------------|
| Björn (fijo) | Heredero | Espada + Escudo | Legado de Sangre (copia x3) |
| Astor (fijo) | Explorador | Arco + Dagas | Flecha del Caos (daño x5) |
| 8 elegidos por el jugador | Variable | Variable | Variable |

**Elegibles (23 disponibles):**
Eirik, Sigrid, Brandr, Hvitserk, Fenja, Einar, Hel, Vidar, Nyx, Móði, Sigyn, Skadi, Ullr, Hrimnir, Skaði, Nótt, Surtr, Loki, Váli, Sif, Mimir, Kára, Vili.

---

## 🌍 5. MUNDOS Y JEFES PRINCIPALES (DETALLADOS)

### 5.1 HISTORIA PRINCIPAL
| Orden | Mundo | Jefe | Nivel | Mecánica Única |
|-------|-------|------|-------|----------------|
| 1 | Midgard | Draugr Rey | 12 | Invoca esqueletos cada 3 turnos. |
| 2 | Alfheim | Reina Ljósálfar | 25 | Puzles de luz y runas. |
| 3 | Muspelheim | Surtur | 35 | Daño por calor (gestión de recursos). |
| 4 | Niflheim | Dragón de Escarcha | 45 | Visibilidad reducida (niebla densa). |
| 5 | Helheim | Hela | 55 | Intercambio de almas (poseer enemigos). |
| 6 | Yggdrasil | Odín (3 fases) | 60 | Batalla en las raíces del árbol. |

### 5.2 JEFES OCULTOS (33) – DETALLADOS CON REQUISITOS DE DESBLOQUEO

#### 6.1 HISTORIA PRINCIPAL (6)
| # | Jefe | Mundo | Requisito de Desbloqueo | Mecánica Única | Recompensa |
|---|------|-------|-------------------------|----------------|------------|
| 1 | El Cuervo de Odín | Midgard | Hablar con 5 cuervos en Midgard (diálogos con pistas). | Combate con ilusiones (clones que hacen daño real). | Pluma de Odín (permite ver enemigos ocultos). |
| 2 | El Guardián de la Luz | Alfheim | Encender 3 faros de luz en el mundo. | Solo vulnerable a ataques mágicos. | Runas de Luz (aumentan daño mágico). |
| 3 | El Gigante de Ceniza | Muspelheim | Recoger 10 cenizas de gigantes caídos. | Se regenera 10% HP por turno. | Corazón de Ceniza (aumenta HP y resistencia a fuego). |
| 4 | El Espectro de Niebla | Niflheim | Encontrar 5 fragmentos de niebla ocultos. | Solo visible al atacar. | Manto de Niebla (inmunidad a ralentización). |
| 5 | El Barquero Olvidado | Helheim | Cruzar el río Gjöll sin pagar (diálogo). | Roba 1 habilidad aleatoria por turno. | Moneda del Olvidado (permite revivir un jefe). |
| 6 | El Eco de Yggdrasil | Yggdrasil | Purificar 3 raíces corruptas antes del jefe final. | Cambia de elemento cada turno. | Fragmento de Yggdrasil (mejora una habilidad definitiva). |

#### 6.2 DLC 1 – DARK GODS (5)
| # | Jefe | Mundo | Requisito de Desbloqueo | Mecánica Única | Recompensa |
|---|------|-------|-------------------------|----------------|------------|
| 1 | El Forjador de Sombras | Nidavellir | Forjar 3 armas en la forja oculta. | Crea armas que atacan por sí solas. | Yunque de Sombras (permite mejorar armas a +5). |
| 2 | El Rey de los Elfos Olvidado | Svartalfheim | Encontrar su trono en una cueva oculta. | Invoca elfos oscuros cada 2 turnos. | Corona de Elfos (aumenta daño a elfos). |
| 3 | La Diosa de la Niebla | Vanaheim | Completar el ritual de la diosa (3 objetos). | Solo vulnerable en la niebla. | Amuleto de Niebla (inmunidad a oscuridad). |
| 4 | El Herrero de Pesadillas | Niðavellir | Encontrar su yunque en una mina abandonada. | Crea pesadillas que dañan a todo el equipo. | Martillo de Pesadillas (arma con daño caótico). |
| 5 | El Vigía de Hel | Helheim (DLC) | No matar a ningún enemigo en Helheim (decisión). | Juzga al equipo por sus pecados pasados. | Lágrima de Hel (revive a 1 aliado por batalla). |

#### 6.3 DLC 2 – ASGARD ON ICE (5)
| # | Jefe | Mundo | Requisito de Desbloqueo | Mecánica Única | Recompensa |
|---|------|-------|-------------------------|----------------|------------|
| 1 | El Gigante de Escarcha | Jötunheim | Encontrar 3 gemas de escarcha ocultas. | Congela a 1 personaje por turno. | Corazón de Escarcha (inmunidad a congelación). |
| 2 | El Guardián del Frío | Niflheim | Recoger 5 fragmentos de hielo eterno. | Se vuelve invulnerable si tiene escudos de hielo. | Gema de Hielo (aumenta daño de hielo). |
| 3 | El Valquiria Helada | Asgard | Hablar con 3 valquirias congeladas. | Vuela fuera de alcance 2 turnos. | Alas de Hielo (permite esquivar ataques). |
| 4 | El Cazador de Sombras | Fimbulwinter | Encontrar 5 sombras en el mundo. | Se oculta en la niebla y ataca por sorpresa. | Manto de Sombras (invisible 2 turnos). |
| 5 | El Espíritu de la Tormenta | Vindheim | Derrotar a 20 enemigos en el mundo. | Daño por turno a todo el equipo. | Ojo de la Tormenta (aumenta velocidad). |

#### 6.4 DLC 3 – RAGNARÖK (5)
| # | Jefe | Mundo | Requisito de Desbloqueo | Mecánica Única | Recompensa |
|---|------|-------|-------------------------|----------------|------------|
| 1 | El Lobo de Ceniza | Vigrid | Decidir no matar a Fenrir (diálogo). | Invoca lobos de ceniza cada turno. | Colmillo de Ceniza (arma con daño de fuego). |
| 2 | El Gigante de Fuego | Muspelheim | Recoger 5 corazones de fuego. | Se regenera 15% HP por turno. | Fragmento de Surtur (arma de fuego eterno). |
| 3 | La Serpiente del Vacío | Yggdrasil | Encontrar 3 escamas de vacío. | Veneno que reduce HP máximo. | Escama de Vacío (aumenta resistencia a veneno). |
| 4 | El Dios del Engaño | Asgard | Completar el acertijo de Loki (3 runas). | Copia habilidades y las usa en tu contra. | Máscara de Loki (duplica efectos de runas). |
| 5 | El Vacío Primordial | Ginnungagap | Completar el ritual del abismo (3 objetos). | Cambia de elemento cada turno. | Fragmento del Vacío (arma que ignora defensas). |

#### 6.5 DLC 4 – ECHOES OF THE PAST (5)
| # | Jefe | Mundo | Requisito de Desbloqueo | Mecánica Única | Recompensa |
|---|------|-------|-------------------------|----------------|------------|
| 1 | El Fantasma de la Familia | Sala de los Caídos | Hablar con 5 fantasmas en el mundo. | Invoca fantasmas de la familia de Eirik. | Lágrima de los Caídos (revive a 1 aliado). |
| 2 | La Valquiria Caída | Valhalla Oscuro | Encontrar 3 alas de valquiria. | Corrupta, ataca a todo el equipo. | Alas de Valhalla (aumenta velocidad). |
| 3 | El Herrero de Almas | Forja de Almas | Forjar 5 armas en la forja. | Crea armas que atacan a todo el equipo. | Yunque de Almas (mejora armas a +10). |
| 4 | La Tejedora de Pesadillas | Bosque de las Nornas | Completar el tejido del destino (3 hilos). | Teje pesadillas que dañan a todo el equipo. | Hilo del Destino (permite reinvertir puntos). |
| 5 | El Eco de Odín | Cripta de los Caídos | Derrotar a todos los jefes ocultos anteriores. | Copia habilidades y las usa en tu contra. | Ojo de Odín (permite ver debilidades). |

#### 6.6 DLC 5 – TWILIGHT OF THE LEGACY (7)
| # | Jefe | Mundo | Requisito de Desbloqueo | Mecánica Única | Recompensa |
|---|------|-------|-------------------------|----------------|------------|
| 1 | El Gigante de Ceniza | Cenizas de Midgard | Recoger 10 cenizas en el mundo. | Se regenera 20% HP por turno. | Corazón de Ceniza (aumenta HP y resistencia). |
| 2 | El Guardián del Olvido | Jardín de los Caídos | Encontrar 5 flores de olvido. | Borra habilidades del equipo por 2 turnos. | Amuleto del Olvido (inmunidad a olvido). |
| 3 | El Engendro del Abismo | Fosa de Jörmungandr | Encontrar 3 escamas de abismo. | Invoca engendros cada turno. | Escama del Abismo (aumenta resistencia a oscuridad). |
| 4 | El Juez de Almas | Cielo de Helheim | Hablar con 5 almas en el mundo. | Juzga el equipo por sus acciones pasadas. | Alma de Juez (revive a 1 aliado). |
| 5 | El Forjador del Caos | Forja del Crepúsculo | Forjar 3 armas en la forja. | Crea armas que atacan a todo el equipo. | Martillo del Caos (arma con daño caótico). |
| 6 | El Vacío Primordial | Corazón de Yggdrasil | Completar el ritual del abismo (3 objetos). | Cambia de elemento cada turno. | Fragmento del Vacío (arma que ignora defensas). |
| 7 | La Oscuridad Primordial | Abismo Primordial | Derrotar a todos los jefes ocultos anteriores. | Copia habilidades y las usa en tu contra. | Corona de Valhalla (accesorio legendario). |

---

## ⚔️ 6. SISTEMAS DE JUEGO (COMPLETO Y DETALLADO)

### 6.1 COMBATE
- Por turnos clásico: 1 acción por turno (atacar, habilidad, objeto, defender).
- Barra de definitiva: Se carga al atacar (+10%) y recibir daño (+15%). Al 100%, permite usar la habilidad definitiva.
- Sin AP: Sin gestión de recursos numéricos adicionales.
- Sin grid táctico: Combate simplificado, enfocado en estrategia de habilidades y objetos.

### 6.2 MECÁNICAS DE BATALLA (ACTIVAS) – 16 MECÁNICAS DETALLADAS
| # | Mecánica | Descripción | Efecto en Combate | Activación |
|---|----------|-------------|-------------------|------------|
| 1 | Reacciones | Contraataques y defensas automáticas. | 30% de probabilidad de responder al ataque enemigo con un golpe básico. | Pasiva (depende de habilidad o equipo). |
| 2 | Debuffs por clima | El clima aplica efectos negativos en combate. | Tormenta → -20% de precisión. Niebla → -30% de precisión, +20% de esquiva. | Automático según clima del mundo. |
| 3 | Ataques combinados (dúo) | Dos personajes atacan juntos si tienen suficiente vínculo. | Daño aumentado (+50%) y efectos especiales (ej: sangrado + congelación). | Activo (requiere nivel de vínculo 2+). |
| 4 | Ruptura de defensa (stagger) | Al acumular daño, el enemigo entra en estado de ruptura. | Recibe +50% de daño y no puede atacar durante 1 turno. | Pasiva (se llena una barra de resistencia). |
| 5 | Ataques cargados | Un turno de carga para hacer daño x3 en el siguiente. | Daño x3 a todos los enemigos o a un objetivo. | Activo (seleccionar "Cargar" en el turno). |
| 6 | Ataques en área con efectos variables | Los ataques en área pueden tener efectos según clima o runa. | En clima Tormenta, además de daño, aplica quemadura a todos los enemigos. | Automático (depende de condiciones). |
| 7 | Cadenas de ataque (combo) | Daño aumenta al golpear repetidamente al mismo enemigo. | +5% de daño por golpe consecutivo (máx. +50%). Se reinicia al fallar o cambiar de objetivo. | Pasiva (se registra automáticamente). |
| 8 | Resistencias dinámicas | Los enemigos ganan resistencia al recibir varios golpes del mismo tipo. | +10% de resistencia por cada 3 golpes del mismo tipo. Se reinicia al cambiar de elemento. | Pasiva (se registra automáticamente). |
| 9 | Ataques de oportunidad | Ataque extra si el enemigo falla o se prepara. | Ataque extra con +30% de daño. | Activo (aparece mensaje de "Oportunidad"). |
| 10 | Mejora de habilidades por uso | Las habilidades suben de nivel al usarlas repetidamente. | +2% de daño por cada 10 usos (máx. nivel 5: +20% de daño + efecto adicional). | Pasiva (contador de usos). |
| 11 | Vulnerabilidad rotativa | Los enemigos cambian su vulnerabilidad cada ciertos turnos. | Vulnerable a fuego (turnos 1-3), vulnerable a hielo (turnos 4-6), etc. | Pasiva (icono muestra elemento actual). |
| 12 | Aliento de batalla | Buff acumulativo por ronda. | +5% de daño por cada 3 turnos (máx. +30%). | Automático al inicio de cada ronda. |
| 13 | Evasión activa | Opción de esquivar con +50% de probabilidad de evadir. | +50% de probabilidad de evadir el próximo ataque. | Activo (seleccionar "Esquivar" en el turno). |
| 14 | Sinergias climáticas ofensivas | El clima potencia habilidades de cierto elemento. | En Lluvia, las habilidades de agua hacen +30% de daño. | Automático según clima. |
| 15 | Ataques de flanqueo | El segundo ataque al mismo enemigo en el mismo turno hace +20% de daño. | +20% de daño al segundo ataque. | Pasiva (se registra automáticamente). |
| 16 | Marcas de caza | Marcar a un enemigo para que reciba +15% de daño durante 3 turnos. | +15% de daño de todos los ataques al enemigo marcado. | Activo (habilidad especial). |

### 6.3 RUNAS Y ACCESORIOS – DETALLADO
| Aspecto | Detalle |
|---------|---------|
| Ranuras | 4 ranuras de runa (ampliables a 6 con Runa de Odín). |
| Tipos | Ofensivas (+daño), Defensivas (+resistencia), Soporte (velocidad/curación/crítico), Únicas (efectos especiales). |
| Sinergias entre runas | Efectos combinados (ej: Fuego + Hielo = +50% daño elemental). |
| Mejora de runas | Forja de Brandr (hasta +3). |
| Obtención | Misiones, cofres, jefes, forja. |
| Ejemplo de runas activas: | 
- Runa de Fuego → +15% daño con habilidades de fuego.
- Runa de Hielo → +15% daño con habilidades de hielo.
- Runa de Odín → +1 slot de runa (máx. 6).
- Runa de Loki → 25% de duplicar efectos. |

### 6.4 CLIMA Y CLIMA EXTREMO – DETALLADO
| Clima | Efecto en combate | Efecto en el mundo |
|-------|-------------------|-------------------|
| Soleado | Sin efectos. | Visibilidad clara. |
| Lluvia | +20% daño de agua, -20% daño de fuego. | Los ríos crecen (nuevas rutas). |
| Nieve | -20% velocidad, +20% daño de hielo. | Caminos bloqueados. |
| Tormenta | -30% precisión, +30% daño de rayos. | Visibilidad reducida. |
| Niebla | -20% precisión, +20% esquiva. | Enemigos ocultos. |
| Cenizas | Daño por turno (2% HP), +30% daño de fuego. | Zonas quemadas. |
| Aurora | +20% velocidad, +20% res. mágica | Eventos especiales. |
| Tormenta de Hielo | -50% velocidad, -50% precisión. | Zonas congeladas. |
| Fuego del Crepúsculo | Daño por turno (5% HP), +50% daño de fuego. | Zonas devastadas. |
| Clima extremo en mazmorras aleatorias: |
| • Tormenta de Hielo: | -50% velocidad, -50% precisión. |
| • Lluvia de Cenizas: | -2% HP por turno. |
| • Niebla Cegadora: | -30% precisión, +20% esquiva. |
| • Tormenta Eléctrica: | +20% daño eléctrico, -20% defensa. |

### 6.5 CRAFTEO Y ALQUIMIA – DETALLADO
| Nivel de Crafteo | Requisito | Efecto |
|------------------|-----------|--------|
| 1 (Básico) | Base | Crear objetos básicos (pociones menores, armas de hierro). |
| 2 (Intermedio) | Completar 5 recetas | Crear objetos intermedios (pociones mayores, armas de acero). |
| 3 (Avanzado) | Completar 10 recetas | Crear objetos avanzados (élixires, armas rúnicas). |
| 4 (Épico) | Completar 20 recetas | Crear objetos épicos (armas legendarias, runas avanzadas). |
| 5 (Legendario) | Completar 30 recetas | Crear objetos legendarios (armas de los dioses, runas primordiales). |
| **Materiales principales:** |
| • Hierba de Luz (vegetación) | → pociones curativas. |
| • Raíz de Escarcha (Niflheim, Jötunheim) | → pociones de resistencia a hielo. |
| • Flor de Fuego (Muspelheim) | → pociones de ataque. |
| • Polvo de Estrellas (Yggdrasil, Vanaheim) | → pociones de maná y objetos raros. |
| • Ceniza de Gigante (Muspelheim, DLC 3) | → bombas y objetos ofensivos. |
| • Esencia de Vacío (Ginnungagap, DLC 5) | → pociones de resistencia a oscuridad. |

### 6.6 ECONOMÍA – DETALLADA
| Recurso | Obtención | Uso Principal |
|---------|-----------|---------------|
| Oro | Enemigos, cofres, misiones, venta | Comprar, mejorar, pagar. |
| Fragmentos Rúnicos | Enemigos rúnicos, cofres, desencantar | Forjar, mejorar runas. |
| Almas de Héroes | Jefes, misiones de personaje, cofres | Mejoras de armas, habilidades. |
| Materiales de Forja | Mundo, minas, enemigos | Mejorar armas y armaduras. |
| Monedas de Valhalla | Boss Rush (normal y +) | Objetos exclusivos del modo. |

### 6.7 SISTEMAS DE MENÚ Y CONFIGURACIÓN (ACTIVOS) – 19 SISTEMAS DETALLADOS
| # | Sistema | Descripción | Cómo se activa |
|---|---------|-------------|----------------|
| 1 | Menú rápido personalizable | Reorganizar accesos directos del menú rápido. | Arrastrar y soltar iconos en el menú. |
| 2 | Filtros avanzados en inventario | Filtrar por tipo, rareza, nivel. | Desplegables en la parte superior del inventario. |
| 3 | Vista previa de skins con lore | Ver skin + texto de origen. | Al seleccionar una skin, aparece una ventana emergente. |
| 4 | Guardado automático con versionado | Guardado cada 5 minutos (5 versiones rotativas). | Automático (sin intervención del jugador). |
| 5 | Resumen de misiones en el mapa | Iconos de misiones con estado. | Al abrir el mapa, se muestran iconos superpuestos. |
| 6 | HUD personalizable | Ocultar o reubicar elementos del HUD. | Desde el menú de configuración. |
| 7 | Comparador de objetos | Comparar objeto seleccionado con equipado. | Al seleccionar un objeto, aparece una ventana emergente. |
| 8 | Accesibilidad visual | Contraste, tamaño de texto, colores. | Desde el menú de accesibilidad. |
| 9 | Configuración de controles (remapeo) | Reasignar teclas y botones. | Desde el menú de configuración. |
| 10 | Estadísticas de juego en tiempo real | Panel con estadísticas globales. | Accesible desde el menú principal. |
| 11 | Diario de viaje con línea de tiempo | Eventos en orden cronológico. | Automático (se actualiza al completar misiones). |
| 12 | Configuración de notificaciones | Activar/desactivar notificaciones. | Interruptores en el menú de configuración. |
| 13 | Vista previa de recompensas en misiones | Ver recompensa antes de aceptar. | En la descripción de la misión. |
| 14 | Modo lectura (diálogos automáticos) | Avanzar diálogos automáticamente. | Opción en el menú de diálogo o configuración. |
| 15 | Configuración de idioma (texto y voz) | Cambiar idioma. | Desplegables en el menú de configuración. |
| 16 | Guía de sistemas (tutorial revisitables) | Consultar tutoriales en cualquier momento. | Accesible desde el menú principal. |
| 17 | Sistema de favoritos en inventario | Marcar objetos como favoritos. | Botón de "favorito" al seleccionar un objeto. |
| 18 | Configuración de sonido por separado | Volúmenes independientes. | Deslizadores en el menú de audio. |
| 19 | Estadísticas por personaje en el menú | Ver stats detalladas por personaje. | En la pantalla de personaje. |

### 6.8 SISTEMAS ADICIONALES (ACTIVOS) – 41 SISTEMAS DETALLADOS
| # | Sistema | Descripción | Cómo se activa |
|---|---------|-------------|----------------|
| 1 | Sinergias + Vínculo (Hermanos de Armas) | Bonificaciones por luchar juntos. | Automático al luchar en equipo. |
| 2 | Cazadores de Recompensas | Misiones dinámicas. | Tablón en aldeas o menú principal. |
| 3 | Fortalezas / Bases | Hogar del jugador con mejoras. | Completar misión principal en Midgard. |
| 4 | Sueños / Visiones | Narrativo, pistas y secretos. | Al descansar en puntos clave. |
| 5 | Glosario / Lore | Compendio de conocimiento. | Menú principal. |
| 6 | Bestiario | Registro de criaturas. | Menú principal. |
| 7 | Desafíos de Supervivencia | Misiones de oleadas. | Tablón de recompensas. |
| 8 | Detección (Huellas) | Rastreo de enemigos. | Activar habilidad en el mapa. |
| 9 | Mercancías Raras | Comerciante viajero. | Aparece aleatoriamente en el mapa. |
| 10 | Árbol Extendido | Habilidades post-nivel máximo. | Al alcanzar nivel máximo. |
| 11 | Talismán de Viaje | Transporte personalizado. | Equipar como accesorio. |
| 12 | Clima Extremo | Clima variable en mazmorras. | Automático al entrar a una mazmorra. |
| 13 | Registro de Batallas | Revivir combates contra jefes. | Desde la base o puntos específicos. |
| 14 | Contratos de Caza | Misiones largas de investigación. | Tablón de recompensas. |
| 15 | Rutas de Viaje | Rutas alternativas. | Marcas en el mapa. |
| 16 | Armas de Rangos | Progresión de armas por uso. | Automático al usar armas. |
| 17 | Conocimiento de Clan | Desbloqueo de habilidades y misiones. | Al encontrar libros, inscripciones o pergaminos. |
| 18 | Guía integrada (tutorial progresivo) | Tutorial que aparece según avanza. | Automático al desbloquear sistemas. |
| 19 | Mapas interactivos con filtros | Mapa con filtros por puntos de interés. | Al abrir el mapa. |
| 20 | Bestiario con animaciones | Animaciones de enemigos. | Al seleccionar un enemigo en el bestiario. |
| 21 | Cartas coleccionables | Coleccionables con lore. | Cofres, misiones, jefes. |
| 22 | Logros con recompensas estéticas | Skins y objetos por logros. | Al completar logros. |
| 23 | Consejos en pantalla de carga | Consejos breves. | Automático en pantallas de carga. |
| 24 | Modo oscuro y accesibilidad visual | Opciones de accesibilidad. | Menú de configuración. |
| 25 | Soporte Steam Deck / Mando | Soporte nativo. | Automático al detectar mando. |
| 26 | Transmog (apariencia de equipo) | Cambiar apariencia sin perder stats. | Menú de equipo. |
| 27 | Árbol de talentos pasivos (global) | Mejoras que afectan a todo el equipo. | Menú de talentos. |
| 28 | Recompensas por tiempo de juego | Recompensas al alcanzar hitos de tiempo. | Automático al alcanzar horas de juego. |
| 29 | Armas que evolucionan | Armas que mejoran al cumplir requisitos. | Automático al cumplir requisitos. |
| 30 | Enemigos élite variables | Enemigos comunes con variantes élite. | Aleatorio en combates comunes. |
| 31 | Marcas del jugador en el mapa | Marcadores personalizados. | Botón derecho en el mapa. |
| 32 | Música variable por zona y situación | Música que cambia según la zona. | Automático al cambiar de zona. |
| 33 | Música reactiva a la barra de definitiva | Música más épica al llenar la barra. | Automático al llenar la barra. |
| 34 | Música por clima | Capas musicales según el clima. | Automático según el clima. |
| 35 | Mensajes ocultos en el entorno | Inscripciones y tallas con lore. | Interactuar con objetos en el entorno. |
| 36 | Ojos de Odín (coleccionables ocultos) | Objetos coleccionables muy bien escondidos. | Exploración minuciosa. |
| 37 | Distancias y rutas | Distancia y tiempo estimado de viaje. | Al seleccionar un punto en el mapa. |
| 38 | Registro de viajes | Estadísticas de exploración. | Menú de estadísticas. |
| 39 | Skins alternativas con lore | Skins con descripción de origen. | Menú de skins. |
| 40 | Música por clima (capas dinámicas) | Música que cambia según el clima. | Automático según el clima. |
| 41 | Estadísticas de combate por personaje | Estadísticas detalladas de combate. | Menú de personaje. |

---

## 🏆 7. LOGROS (TOTAL: 168)

### 7.1 LOGROS BASE (150) – DISTRIBUCIÓN
| Categoría | Cantidad |
|-----------|----------|
| Exploración | 10 |
| Combate | 20 |
| Coleccionismo | 10 |
| Historia | 10 |
| Jefes | 20 |
| Desafío | 20 |
| Crafteo y Alquimia | 10 |
| Clima | 5 |
| Boss Rush | 5 |
| Mazmorras Aleatorias | 5 |
| DLC 1 | 5 |
| DLC 2 | 5 |
| DLC 3 | 5 |
| DLC 4 | 5 |
| DLC 5 | 7 |
| Secretos | 5 |
| Miscelánea | 5 |

### 7.2 LOGROS POSTGAME (18)
| # | Logro | Requisito | Recompensa |
|---|-------|-----------|------------|
| 1 | "El Guardián del Abismo" | Llega al piso 50 de El Abismo Infinito. | Moneda de Valhalla x50. |
| 2 | "El Rey del Abismo" | Llega al piso 100 de El Abismo Infinito. | Moneda de Valhalla x100. |
| 3 | "El Eco de Valhalla" | Derrota a El Eco de Valhalla. | Moneda de Valhalla x50. |
| 4 | "El Último Einherjar" | Derrota a El Último Einherjar. | Moneda de Valhalla x100. |
| 5 | "El Rey de los Espectros" | Derrota a El Rey de los Espectros. | Moneda de Valhalla x50. |
| 6 | "La Reina de las Sombras" | Derrota a La Reina de las Sombras. | Moneda de Valhalla x50. |
| 7 | "El Origen del Vacío" | Derrota a El Origen del Vacío. | Moneda de Valhalla x100. |
| 8 | "El Dios de la Guerra" | Derrota a El Dios de la Guerra. | Moneda de Valhalla x50. |
| 9 | "El Guardián del Tiempo" | Derrota a El Guardián del Tiempo. | Moneda de Valhalla x150. |
| 10 | "El Último Gigante" | Derrota a El Último Gigante. | Moneda de Valhalla x100. |
| 11 | "El Leyenda" | Completa el Modo Leyenda. | Moneda de Valhalla x100. |
| 12 | "El Coleccionista Supremo" | Consigue todos los objetos postgame (23). | Moneda de Valhalla x150. |
| 13 | "El Cuervo Eterno" | Derrota a El Cuervo de los Nueve Reinos. | Moneda de Valhalla x100. |
| 14 | "El Gigante de Hielo Eterno" | Derrota a El Gigante de Hielo Eterno. | Moneda de Valhalla x100. |
| 15 | "El Templo de la Serpiente" | Derrota a La Serpiente del Templo. | Moneda de Valhalla x100. |
| 16 | "El Explorador de los Nueve Reinos" | Visita todas las zonas postgame (15). | Moneda de Valhalla x200. |
| 17 | "El Cazador de Dioses" | Derrota a todos los jefes postgame (15). | Moneda de Valhalla x300. |
| 18 | "El Guardián de Yggdrasil" | Completa todas las misiones postgame (15). | Moneda de Valhalla x400. |

---

## 🏆 8. SISTEMAS EN ESPERA (EXPANSIÓN FUTURA) – 44 SISTEMAS
| # | Sistema | Notas |
|---|---------|-------|
| 1 | Reputación | Decisiones afectan clanes/dioses. |
| 2 | Barcos | Navegación entre mundos acuáticos. |
| 3 | Eventos Mundiales | Crisis dinámicas en el mundo. |
| 4 | Reliquias | Objetos legendarios únicos. |
| 5 | Rituales | Ofrendas en santuarios para obtener buffs. |
| 6 | Mascotas | Compañeros no combatientes con bonificaciones pasivas. |
| 7 | Guardianes de Yggdrasil | Defensa pasiva de raíces para obtener recursos. |
| 8 | Alianzas Temporales | NPCs ayudantes en combate. |
| 9 | Tradiciones del Clan | Misiones rituales de clanes nórdicos. |
| 10 | Reliquias de Clan | Herencia colectiva de clanes. |
| 11 | Bendiciones Semanales | Buffs globales semanales. |
| 12 | Tótem de Clan | Bonificación pasiva en zonas. |
| 13 | Recetas Secretas | Crafteo avanzado desbloqueable. |
| 14 | Pruebas de los Dioses | Desafíos divinos. |
| 15 | Alquimia Avanzada | Pociones con efectos secundarios. |
| 16 | Apoyo de Aldeanos | Bonificaciones por confianza con NPCs. |
| 17 | Soldados del Clan | Reclutamiento de seguidores. |
| 18 | Armas Legendarias | Cadenas de misiones para obtener armas únicas. |
| 19 | Compañeros de Viaje | Personajes temporales con diálogos únicos. |
| 20 | Joyas de Clan | Gemas combinables para sinergias. |
| 21 | Tempestad | Eventos globales temporales. |
| 22 | Guardianes Personales | Espíritus vinculados con habilidades únicas. |
| 23 | Forja de Almas | Mejora de equipo con almas de enemigos. |
| 24 | Rituales de Clan | Bendiciones mediante ofrendas. |
| 25 | Huellas de Sangre | Rastreo narrativo de enemigos. |
| 26 | Compañeros de Clan | Reclutamiento de personajes secundarios. |
| 27 | Cartas de Saga | Coleccionables con recompensas. |
| 28 | Desafíos de Rangos | Misiones con restricciones de tiempo y condiciones. |
| 29 | Diálogos con voz | Voces para momentos clave. |
| 30 | Música con letra nórdica | Temas principales con letras en nórdico antiguo. |
| 31 | Desafíos de supervivencia | Misiones de oleadas. |
| 32 | Mapas del tesoro | Con pistas visuales. |
| 33 | Aldeanos con diálogos dinámicos | Diálogos cambiantes según progreso. |
| 34 | Gemas de clan | Mejoras pasivas equipables. |
| 35 | Registro de decisiones | Árbol de consecuencias narrativas. |
| 36 | Cofres mágicos | Recompensa aleatoria. |
| 37 | Tradiciones de clan | Misiones rituales. |
| 38 | Soldados del clan | Seguidores en combate. |
| 39 | Pruebas de los dioses | Desafíos divinos. |
| 40 | Herencia de armas | Transmisión de armas entre generaciones. |
| 41 | Bendiciones semanales | Buffs globales. |
| 42 | Aldeanos con rutinas | Mundo vivo. |
| 43 | Joyas de clan | Sinergias combinables. |
| 44 | Coleccionables de historia | Libros rúnicos. |

---

## 🌍 9. POSTGAME (CONTENIDO COMPLETO)

### 9.1 ZONAS POSTGAME (15)
| # | Zona | Acceso |
|---|------|--------|
| 1 | La Ciudadela de los Caídos | Completar DLC 5. |
| 2 | El Abismo Infinito | Completar La Ciudadela de los Caídos. |
| 3 | El Salón de los Ecos | Completar El Abismo Infinito (piso 30). |
| 4 | El Panteón de los Dioses Caídos | Completar El Salón de los Ecos. |
| 5 | El Bosque de los Susurros | Completar El Panteón de los Dioses Caídos. |
| 6 | La Forja de los Dioses | Completar El Bosque de los Susurros. |
| 7 | El Jardín de las Nornas | Completar La Forja de los Dioses. |
| 8 | El Trono de Odín | Completar El Jardín de las Nornas. |
| 9 | La Cripta de los Einherjar | Completar El Trono de Odín. |
| 10 | El Río del Olvido | Completar La Cripta de los Einherjar. |
| 11 | El Pico de los Gigantes | Completar El Río del Olvido. |
| 12 | El Corazón de Yggdrasil | Completar El Pico de los Gigantes. |
| 13 | El Santuario de los Cuervos | Completar El Corazón de Yggdrasil. |
| 14 | El Valle de los Gigantes Congelados | Completar El Santuario de los Cuervos. |
| 15 | El Templo de la Serpiente | Completar El Valle de los Gigantes Congelados. |

### 9.2 JEFES POSTGAME (15 EXCLUSIVOS) – DETALLADOS
| # | Jefe | Ubicación | Fases | Mecánica Única | Debilidad | Recompensa |
|---|------|-----------|-------|----------------|-----------|------------|
| 1 | El Eco de Valhalla | La Ciudadela de los Caídos | 4 | Cambia de elemento cada turno. | Elemento opuesto. | Corona de los Caídos. |
| 2 | Guardián del Abismo | El Abismo Infinito (piso 50) | 3 | Roba una habilidad aleatoria por turno. | Usar objetos. | Alma del Abismo. |
| 3 | El Último Einherjar | La Ciudadela de los Caídos | 5 | Copia todas las habilidades del equipo. | Variable por fase. | Alma del Último Einherjar. |
| 4 | Rey de los Espectros | El Salón de los Ecos | 3 | Invoca espectros de jefes anteriores. | Atacar a los espectros primero. | Cetro de los Espectros. |
| 5 | Reina de las Sombras | El Abismo Infinito (piso 80) | 4 | Reduce la visión del jugador. | Habilidades de luz. | Manto de Sombras. |
| 6 | Origen del Vacío | El Abismo Infinito (piso 120) | 6 | Anula habilidades por 2 turnos. | Objetos rúnicos. | Alma del Origen. |
| 7 | Dios de la Guerra | El Panteón de los Dioses Caídos | 4 | Invoca versiones corruptas de los héroes. | Ataques de hielo. | Espada de la Guerra. |
| 8 | Guardián del Tiempo | El Trono de Odín | 5 | Retrocede el tiempo (revive enemigos). | Ataques de luz. | Reloj de los Dioses. |
| 9 | El Último Gigante | El Pico de los Gigantes | 4 | Se regenera 20% HP por turno. | Ataques de fuego. | Corazón de Gigante. |
| 10 | Cuervo de los Nueve Reinos | El Santuario de los Cuervos | 3 | Invoca cuervos que atacan cada turno. | Ataques de fuego. | Pluma del Cuervo Eterno. |
| 11 | Gigante de Hielo Eterno | El Valle de los Gigantes Congelados | 4 | Congela a un personaje por turno. | Ataques de fuego. | Corazón de Hielo Eterno. |
| 12 | Serpiente del Templo | El Templo de la Serpiente | 5 | Envuelve a un personaje, inmovilizándolo 2 turnos. | Ataques de trueno. | Escama de Jörmungandr. |
| 13 | Guardián de los Susurros | El Bosque de los Susurros (oculto) | 3 | Susurros que reducen la precisión. | Ataques de luz. | Amuleto de los Susurros+. |
| 14 | Forjador de Runas | La Forja de los Dioses (oculto) | 4 | Crea runas que atacan al equipo. | Ataques físicos. | Runas de la Forja. |
| 15 | Último Dragón de Nieve | El Pico de los Gigantes (oculto) | 5 | Vuela fuera de alcance 2 turnos. | Ataques de fuego. | Escama de Dragón. |

### 9.3 MISIONES POSTGAME (15) – DETALLADAS
| # | Misión | Objetivo | Recompensa |
|---|--------|----------|------------|
| 1 | "El Llamado de los Caídos" | Investigar La Ciudadela de los Caídos. | Acceso a la zona. |
| 2 | "El Abismo Infinito" | Llegar al piso 50 de El Abismo Infinito. | Alma del Abismo. |
| 3 | "El Último Einherjar" | Derrotar a El Último Einherjar. | Alma del Último Einherjar. |
| 4 | "El Rey de los Espectros" | Derrotar a El Rey de los Espectros. | Cetro de los Espectros. |
| 5 | "La Reina de las Sombras" | Derrotar a La Reina de las Sombras. | Manto de Sombras. |
| 6 | "El Origen del Vacío" | Derrotar a El Origen del Vacío. | Alma del Origen. |
| 7 | "El Panteón de los Dioses Caídos" | Explorar el Panteón. | Acceso a la zona. |
| 8 | "El Bosque de los Susurros" | Escuchar los susurros del bosque. | Amuleto de los Susurros. |
| 9 | "La Forja de los Dioses" | Forjar un arma legendaria. | Martillo de los Dioses. |
| 10 | "El Jardín de las Nornas" | Tejer el destino con las Nornas. | Hilo del Destino. |
| 11 | "El Trono de Odín" | Enfrentar a El Guardián del Tiempo. | Reloj de los Dioses. |
| 12 | "El Corazón de Yggdrasil" | Purificar el núcleo del árbol. | Alma de Yggdrasil. |
| 13 | "El Santuario de los Cuervos" | Derrotar a El Cuervo de los Nueve Reinos. | Pluma del Cuervo Eterno. |
| 14 | "El Valle de los Gigantes Congelados" | Liberar o derrotar a los gigantes. | Corazón de Hielo Eterno. |
| 15 | "El Templo de la Serpiente" | Purificar el Templo de Jörmungandr. | Escama de Jörmungandr. |

### 9.4 OBJETOS POSTGAME (23) – DETALLADOS
| # | Objeto | Efecto |
|---|--------|--------|
| 1 | Corona de los Caídos | +50% de daño a jefes. |
| 2 | Alma del Abismo | +30% a todos los stats. |
| 3 | Alma del Último Einherjar | +100% a todas las habilidades. |
| 4 | Cetro de los Espectros | Invoca un espectro aliado en combate. |
| 5 | Manto de Sombras | +50% de esquiva. |
| 6 | Alma del Origen | +200% a todas las habilidades. |
| 7 | Espada de la Guerra | +50% de daño a dioses. |
| 8 | Reloj de los Dioses | +1 acción por turno. |
| 9 | Corazón de Gigante | +50% HP máximo. |
| 10 | Amuleto de los Susurros | Revela enemigos ocultos en el mapa. |
| 11 | Martillo de los Dioses | Arma legendaria con daño masivo. |
| 12 | Alma de Yggdrasil | +50% a todos los stats, inmunidad a muerte. |
| 13 | Pluma del Cuervo Eterno | +20% de velocidad y +10% a enemigos voladores. |
| 14 | Corazón de Hielo Eterno | +30% de resistencia a hielo y +20% HP. |
| 15 | Escama de Jörmungandr | +30% de defensa y +10% a bestias. |
| 16 | Cetro del Tiempo | +1 acción por turno (versión mejorada). |
| 17 | Alma de los Caídos | +50% a todos los stats (versión mejorada). |
| 18 | Corona de Valhalla+ | +50% a todos los stats, inmunidad a muerte. |
| 19 | Espada de los Einherjar | +50% de daño a jefes (versión mejorada). |
| 20 | Manto de la Reina | +75% de esquiva. |
| 21 | Fragmento del Origen | +50% a todas las habilidades. |
| 22 | Corazón del Dragón | +100% HP máximo. |
| 23 | Alma del Último Guerrero | +200% a todas las habilidades (versión mejorada). |

---

## ⚔️ 10. MODOS DE JUEGO

### 10.1 MODO LEYENDA (NEW GAME+)
- Reinicia la historia con tu equipo actual (niveles, objetos, runas).
- Enemigos más fuertes (+50% HP y daño).
- Jefes con mecánicas adicionales.
- Nuevos logros y objetos exclusivos.

### 10.2 BOSS RUSH NORMAL
- 34 jefes (33 principales + Valhall's Guardian).
- Oleadas de 3 jefes, con pausa entre oleadas.
- Recompensa: Lanza de los Elegidos, Alma de Valhalla, Monedas de Valhalla.

### 10.3 BOSS RUSH+
- 68 jefes (33 principales + 33 ocultos + Valhall's Guardian+ + The Primordial One).
- Oleadas de 4 jefes, sin pausa entre oleadas.
- Recompensa: Corona de Valhalla+, Alma del Origen, Monedas de Valhalla, logro "El Último Einherjar".

### 10.4 MODOS RECOMENDADOS (EN ESPERA)
- Modo Relato: Dificultad narrativa (enemigos más fáciles).
- Desafío de Clan: Jugar con restricciones de personajes por clan.
- Ruta de Héroe: Jugar con un solo protagonista principal.

---

## 🎨 11. ARTE Y SONIDO

### 11.1 ARTE
- Estilo: Pixel art 16-bit con paleta nórdica (azules, grises, rojos).
- Transición a 2.5D: Iluminación dinámica, sombras, profundidad de campo, niebla, partículas, bloom.
- Animaciones: Efectos de runas, invocaciones y habilidades definitivas.

### 11.2 SONIDO
- Música: Tambores nórdicos, coros épicos y leitmotivs por personaje.
- Música variable: Cambia según zona, clima, situación y barra de definitiva.
- Efectos de sonido: Ambientales, combate, UI, magia.

---

## 📅 12. CRONOGRAMA DE DESARROLLO
| Fase | Duración | Contenido |
|------|----------|-----------|
| Preproducción | 6 meses | Documentos de diseño, sprites base, BSO. |
| Historia Principal | 18 meses | 6 mundos, 6 personajes, sistemas base. |
| DLC 1 | 6 meses | 5 mundos, 7 personajes, sistemas DLC. |
| DLC 2 | 6 meses | 5 mundos, 7 personajes, sistemas DLC. |
| DLC 3 | 8 meses | 5 mundos, 7 personajes, sistemas DLC. |
| DLC 4 | 6 meses | 5 mundos, 8 personajes, sistemas DLC. |
| DLC 5 | 10 meses | 7 mundos, 10 personajes, sistemas DLC. |
| Postgame | 6 meses | 15 zonas, 15 jefes, 15 misiones. |
| Boss Rush | 4 meses | Modos Normal y +. |
| Pulido y Testing | 6 meses | Optimización, voces, lanzamiento. |
| **Total** | **82 meses** | (~6 años y 10 meses) |

---

## 📊 13. RESUMEN DE CONTENIDO (TOTALES FINALES)
| Concepto | Cantidad |
|----------|----------|
| Mundos totales | 48 |
| Jefes totales | 81 |
| Personajes jugables | 45 |
| Horas de juego | 197–246 |
| Sistemas activos | 60+ |
| Sistemas en espera | 44 |
| DLCs | 5 |
| Zonas postgame | 15 |
| Logros totales | 168 |
| Objetos postgame | 23 |
| Modos de juego | 4 (historia + Boss Rush Normal + Boss Rush+ + Leyenda) |

---

## ✅ 14. SIGUIENTES PASOS
1. Prototipar la historia principal en RPG Maker.
2. Diseñar sprites clave (personajes, jefes, tilesets).
3. Implementar sistemas base (combate, runas, clima, crafteo).
4. Testear y balancear la experiencia inicial.
5. Migrar a Unity para la versión 2.5D HD-2D.
6. Desarrollar DLCs y postgame de forma iterativa.

--- 

*Fin del documento enriquecido.*