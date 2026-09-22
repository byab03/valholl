# CLAUDE.md — Valholl (RPG Maker / Game Dev)

## Reglas globales
### Ponytail (YAGNI enforcer) — Nivel: full
@../../../.agents/AGENTS.md

### Caveman (terse output) — Nivel: full
@../../../.agents/CAVEMAN.md

## Configuración del proyecto
- **Motor**: RPG Maker MZ / MV
- **Tipo**: RPG original / Projecto de juego
- **Repositorio**: GitHub privado (byab03/valholl)

## Skills de desarrollo de juegos (instaladas)
- **claude-code-game-studios**: Studio completo (49 agentes, 73 skills, jerarquía real)
- **novel-to-game**: Adaptar novela/lore a juego jugable
- **pokemon-player**: Testing headless emulator + RAM reads
- **analyze-project**: Análisis código base RPG Maker
- **repo-intake-and-plan**: Planificación features
- **planning-with-files** / **get-shit-done**: Gestión tareas
- **documentation-and-adrs**: Documentar decisiones arquitectura
- **codebase-inspection**: Métricas código

## Skills de escritura (para lore/GDD)
- **writing-fragments**: Minar ideas sueltas
- **writing-shape**: Estructurar GDD párrafo a párrafo
- **writing-beats**: Organizar narrativa en beats
- **humanizer**: Diálogos naturales
- **ideation** / **brainstorming**: Sistemas, culturas, conflictos
- **interview-me**: Desarrollar personajes

## Skills transversales
- **i-have-adhd**: Output directo
- **grill-me** / **interview-me**: Validar planes
- **weekly-review-planning**: Reset semanal
- **para-memory-files** / **logseqbrain**: Knowledge base persistente
- **auto-sync-backup**: Sync automático (03:00)

## Estructura del proyecto (actual)
- `/design/gdd/` — 10 documentos de diseño (sistemas, tipos, zonas, menús, etc.)
- `/production/gate-checks/` — Gate de diseño de sistemas
- `/production/session-state/` — Estado activo de sesión
- GDD consolidado raíz (55KB)
- MVP scaffold en `/mvp-scaffold/`

## Flujo sugerido
1. `grill-me` → Definir próximo milestone
2. `claude-code-game-studios` → Studio hierarchy para producción
3. `analyze-project` → Auditar MVP scaffold actual
4. `writing-shape` / `writing-beats` → Completar GDD desde fragments
5. `repo-intake-and-plan` → Plan técnico implementación