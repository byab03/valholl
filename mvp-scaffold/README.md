# Valhöll MVP — Scaffold (paso 1-2 de 11)

## Qué es esto
Precocción del MVP del Acto I: los JSONs de balance y los 2 primeros plugins, listos para caer en un proyecto real de RPG Maker MZ.

## Cuando termine tu descarga de MZ

1. **Abrir RPG Maker MZ → New Project** → nombrarlo `Valholl`.
2. Localizar la carpeta del proyecto (la que eliges en "Browse" al crear).
3. Copiar sobre ella:
   - `data/VH_*.json` → a `TuProyecto/data/`
   - `js/plugins/VH_*.js` → a `TuProyecto/js/plugins/`
4. En el editor: **Menu → Plugin Manager → +** y añadir en orden:
   1. `VH_Core` (sin parámetros)
   2. `VH_Furia` (orderAfter VH_Core)
5. Activar el plugin con el switch, si el editor lo pide.

## Verificación (consola del juego)
Correr el juego (F12 abre DevTools → pestaña Console). Debe aparecer:

```
[VH] configs cargadas: VH_Furia, VH_Runas, VH_Vinculos, VH_Clima
[VH] VH_Furia v0.1 activo
```

Prueba de fuego (literal): inicia un combate de prueba, recibe golpes → la barra no se ve aún (eso es el paso 3: HUD), pero con F12 puedes inspeccionar:

```js
$gameActors.actor(1)._vhFuria   // 0 → sube con cada golpe recibido
```

Con HP bajo 50% cada golpe da +30, no +15. Con 4 golpes de castigo estando herido: 120 → topa en 100.

## Estado de los 11 pasos del MVP (04-ArquitecturaMZ.md §10)

| # | Paso | Estado |
|---|------|--------|
| 1 | Proyecto base + JSONs + Core | 🟡 PRECOCIDO (falta tu proyecto MZ) |
| 2 | VH_Furia (lógica) | 🟡 PRECOCIDO (falta HUD) |
| 3 | HUD de Furia (Window_VH_Furia) | ⬜ siguiente |
| 4 | Iniciativa visible | ⬜ |
| 5 | Runas equipables | ⬜ |
| 6 | Vínculo Fenrir | ⬜ |
| 7 | Clima (2) | ⬜ |
| 8 | Skat + árbol | ⬜ |
| 9 | Crafteo nv.1 | ⬜ |
| 10 | Draugr Rey | ⬜ |
| 11 | Diálogos + guardado + tutorial | ⬜ |

## Configuración de skills de ejemplo (dentro del editor MZ)
Para probar la regla de furia, crea una skill "Ragnarök Mode" con notetag:
```
<vhRequireFuria:100>
```
Solo será usable con la barra llena. (El parser de meta de MZ ya la lee gratis.)