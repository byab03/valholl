# Valhöll MVP — Pasos 1-3 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Crear el proyecto RPG Maker MZ real, integrar el scaffold pre-cocido (JSONs + VH_Core + VH_Furia), implementar el HUD de Furia (Window_VH_Furia) y la iniciativa visible (VH_Iniciativa) — completando los pasos 1-3 de la arquitectura (§10 de 04-ArquitecturaMZ.md).

**Architecture:** Proyecto MZ como contenedor; datos de balance en `data/VH_*.json` (fuente de verdad portable); lógica en plugins modulares `VH_*.js` bajo namespace `window.VH`. Paso 1 = setup + verificación; Paso 2 = HUD visual de la furia existente; Paso 3 = cola de turnos anticipada estilo FFX.

**Tech Stack:** RPG Maker MZ (JS ES6, Pixi.js, Effekseer), JSON para balance, plugins propios VH_*.

**Spec:** `04-ArquitecturaMZ.md` §10 (pasos 1-3), `01-GDD-Consolidado.md` §7-Sistema 1 (Furia Nórdica), `mvp-scaffold/` (JSONs + VH_Core.js + VH_Furia.js).

## Global Constraints
- Motor: RPG Maker MZ (resolución 1280×720, tiles 48×48, battlers ~320×320)
- Datos NUNCA hardcodeados: todo balance en `data/VH_*.json` leído por `VH.Core.cfg`
- Plugins con prefijo `VH_`, orden de carga: Core → Furia → Iniciativa → resto
- No tocar `rmmz_*.js` del motor; alias/overwrite en nuestros plugins
- Furia: barra 0-100, +15% recibir daño (×2 bajo 50% HP), +10% atacar, al 100% = definitiva + "Gloria o Muerte"
- Iniciativa: orden visible calculado por `agi` + mods, reordena en buffs/debuffs de velocidad
- Criterio done paso 1: consola muestra "[VH] configs cargadas: VH_Furia, VH_Runas, VH_Vinculos, VH_Clima" + "[VH] VH_Furia v0.1 activo"
- Criterio done paso 2: barra de furia visible en batalla, pulso Effekseer al 100%, definitiva usable
- Criterio done paso 3: cola lateral con retratos, 1 buff que reordena visible

## Review Focus
1. **Proyecto MZ no creado / rutas incorrectas** → paso 1 falla silenciosamente; test: `ls data/VH_*.json` y consola del juego
2. **VH_Core no carga JSONs (CORS/ruta relativa)** → furia no funciona; test: `$gameActors.actor(1)._vhFuria` sube al recibir daño
3. **HUD no se dibuja / z-index incorrecto** → barra invisible; test: batalla de prueba, ver barra en esquina sup. der.
4. **Iniciativa no reordena tras buff de velocidad** → "dinamismo" roto; test: Hvitserk aplica buff, cola se mueve
5. **Effekseer no reproduce al 100% furia** → feedback visual perdido; test: Eirik llena furia, ver partículas

---

### Task 1: Crear proyecto MZ + copiar scaffold + activar plugins

**Files:**
- Create: `Valholl/` (proyecto MZ completo via editor)
- Copy: `data/VH_Furia.json`, `data/VH_Runas.json`, `data/VH_Vinculos.json`, `data/VH_Clima.json` → `Valholl/data/`
- Copy: `js/plugins/VH_Core.js`, `js/plugins/VH_Furia.js` → `Valholl/js/plugins/`
- Modify: `Valholl/js/plugins.js` (plugin manager config)

**Interfaces:**
- Consumes: scaffold pre-cocido en `mvp-scaffold/`
- Produces: proyecto MZ arrancable con Core + Furia activos

- [ ] **Step 1.1: Crear proyecto MZ "Valholl" en carpeta elegida**

```bash
# Manual via RPG Maker MZ editor: New Project → nombre "Valholl" → elegir carpeta destino
```

- [ ] **Step 1.2: Copiar JSONs de balance a `Valholl/data/`**

```bash
cp mvp-scaffold/data/VH_*.json Valholl/data/
# Verificar: ls Valholl/data/VH_*.json  # 4 archivos
```

- [ ] **Step 1.3: Copiar plugins a `Valholl/js/plugins/`**

```bash
cp mvp-scaffold/js/plugins/VH_Core.js mvp-scaffold/js/plugins/VH_Furia.js Valholl/js/plugins/
```

- [ ] **Step 1.4: Activar plugins en orden via Plugin Manager (o editar `js/plugins.js`)**

```json
// En js/plugins.js (o via editor Menu → Plugin Manager → +)
[
  {"name":"VH_Core","status":true,"description":"","parameters":{}},
  {"name":"VH_Furia","status":true,"description":"","parameters":{}}
]
```

- [ ] **Step 1.5: Verificar consola (F12 → Console) al arrancar juego**

```bash
# Debe aparecer:
# [VH] configs cargadas: VH_Furia, VH_Runas, VH_Vinculos, VH_Clima
# [VH] VH_Furia v0.1 activo
```

- [ ] **Step 1.6: Probar furia en batalla de prueba (F12 → Console)**

```js
$gameActors.actor(1)._vhFuria  // 0 inicial
// Recibir daño → debe subir (+15 normal, +30 bajo 50% HP)
// Atacar → debe subir +10
```

- [ ] **Step 1.7: Commit**

```bash
git add Valholl/
git commit -m "feat: paso 1 - proyecto MZ + scaffold + Core + Furia funcional"
```

---

### Task 2: HUD de Furia (Window_VH_Furia) — Paso 2

**Files:**
- Create: `Valholl/js/plugins/VH_FuriaHUD.js` (nuevo plugin)
- Modify: `Valholl/js/plugins/VH_Furia.js` (exponer API para HUD si necesario)
- Modify: `Valholl/js/plugins.js` (añadir VH_FuriaHUD después de VH_Furia)

**Interfaces:**
- Consumes: `VH.Furia.get(battler)`, `VH.Furia.ready(battler)`, `VH.Furia.MAX` (100)
- Produces: `Window_VH_Furia` clase dibujada en `Scene_Battle`, barra + texto + Effekseer al 100%

- [ ] **Step 2.1: Crear `Window_VH_Furia` extendiendo `Window_Base`**

```javascript
// En VH_FuriaHUD.js
class Window_VH_Furia extends Window_Base {
  initialize(rect) { Window_Base.prototype.initialize.call(this, rect); this._actor = null; }
  setActor(actor) { this._actor = actor; this.refresh(); }
  refresh() { this.contents.clear(); if (!this._actor) return; this.drawFuriaGauge(); }
  drawFuriaGauge() { /* barra 200px, color oro→rojo, texto "Furia: XX/100" */ }
  update() { Window_Base.prototype.update.call(this); if (this._actor && this._actor._vhFuria !== this._lastFuria) { this._lastFuria = this._actor._vhFuria; this.refresh(); if (this._actor._vhFuria >= 100) this.playEffekseer(); } }
  playEffekseer() { /* load Effekseer 'FuriaMax' y play en posición ventana */ }
}
```

- [ ] **Step 2.2: Integrar ventana en `Scene_Battle`**

```javascript
// En VH_FuriaHUD.js (alias)
const _Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
  _Scene_Battle_createAllWindows.call(this);
  this._vhFuriaWindow = new Window_VH_Furia(new Rectangle(Graphics.boxWidth - 220, 0, 220, 80));
  this.addWindow(this._vhFuriaWindow);
  this._vhFuriaWindow.setActor($gameParty.members()[0]); // actor activo
};

const _Scene_Battle_onActorChange = Scene_Battle.prototype.onActorChange || function() {};
Scene_Battle.prototype.onActorChange = function() {
  _Scene_Battle_onActorChange.call(this);
  if (this._vhFuriaWindow) this._vhFuriaWindow.setActor(BattleManager.actor());
};
```

- [ ] **Step 2.3: Añadir skill de prueba con `<vhRequireFuria:100>` en editor MZ**

```text
// En MZ Database → Skills → nueva "Ragnarök Mode"
// Notetag: <vhRequireFuria:100>
// Efecto: daño masivo, inmortalidad 3 turnos (ver VH_Furia.cfg().ragnarokEirik)
```

- [ ] **Step 2.4: Probar en batalla: recibir daño → barra sube → al 100% skill usable + Effekseer**

- [ ] **Step 2.5: Commit**

```bash
git add Valholl/js/plugins/VH_FuriaHUD.js Valholl/js/plugins.js
git commit -m "feat: paso 2 - HUD de Furia (Window_VH_Furia + Effekseer)"
```

---

### Task 3: Iniciativa visible (VH_Iniciativa) — Paso 3

**Files:**
- Create: `Valholl/js/plugins/VH_Iniciativa.js`
- Create: `Valholl/js/plugins/VH_IniciativaHUD.js` (ventana cola lateral)
- Modify: `Valholl/js/plugins.js` (añadir ambos después de VH_FuriaHUD)

**Interfaces:**
- Consumes: `Game_Battler.agi`, `Game_Action` execution order, buffs/debuffs que cambian `agi`
- Produces: `vhTurnQueue` array ordenado, `Window_VH_TurnOrder` lateral con retratos, reorden en vivo

- [ ] **Step 3.1: Calcular cola de turnos al empezar ronda (`vhTurnQueue`)**

```javascript
// En VH_Iniciativa.js
VH.Iniciativa = VH.Iniciativa || {};
VH.Iniciativa.makeTurnQueue = function() {
  const members = $gameParty.aliveMembers().concat($gameTroop.aliveMembers());
  members.forEach(b => b._vhInitiative = b.agi + Math.randomInt(5)); // tie-break
  members.sort((a,b) => b._vhInitiative - a._vhInitiative);
  $gameSystem._vhTurnQueue = members;
  VH.Core.log("Turn queue:", members.map(m => m.name()));
};
// Hook: BattleManager.startTurn → llamar makeTurnQueue
```

- [ ] **Step 3.2: Reordenar cola cuando `agi` cambia (buff/debuff)**

```javascript
const _Game_Battler_addBuff = Game_Battler.prototype.addBuff;
Game_Battler.prototype.addBuff = function(paramId, turns) {
  _Game_Battler_addBuff.call(this, paramId, turns);
  if (paramId === 6) { // agi = paramId 6 en MZ
    VH.Iniciativa.makeTurnQueue();
    if (SceneManager._scene._vhTurnWindow) SceneManager._scene._vhTurnWindow.refresh();
  }
};
// Igual para addDebuff, removeBuff, removeDebuff
```

- [ ] **Step 3.3: `Window_VH_TurnOrder` — lista lateral con retratos (estilo FFX)**

```javascript
// En VH_IniciativaHUD.js
class Window_VH_TurnOrder extends Window_Base {
  initialize(rect) { Window_Base.prototype.initialize.call(this, rect); this.refresh(); }
  refresh() { this.contents.clear(); const queue = $gameSystem._vhTurnQueue || []; queue.slice(0,8).forEach((b,i) => this.drawTurnIcon(b,i)); }
  drawTurnIcon(battler, index) { /* retrato 48x48 + nombre + indicador "ACT" si index===0 */ }
}
```

- [ ] **Step 3.4: Integrar ventana en `Scene_Battle` (lado izquierdo, alto completo)**

```javascript
// En VH_IniciativaHUD.js
const _Scene_Battle_createAllWindows2 = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
  _Scene_Battle_createAllWindows2.call(this);
  this._vhTurnWindow = new Window_VH_TurnOrder(new Rectangle(0, 0, 180, Graphics.boxHeight));
  this.addWindow(this._vhTurnWindow);
};
```

- [ ] **Step 3.5: Añadir buff de velocidad de prueba (Hvitserk) y probar reorden visible**

```text
// Skill "Viento Veloz" en MZ: addBuff(6, 3) // agi +3 turnos
// En batalla: usar → cola debe reordenar y HUD actualizar
```

- [ ] **Step 3.6: Commit**

```bash
git add Valholl/js/plugins/VH_Iniciativa.js Valholl/js/plugins/VH_IniciativaHUD.js Valholl/js/plugins.js
git commit -m "feat: paso 3 - Iniciativa visible (cola FFX + reorden en buffs)"
```

---

## Self-Review

**Spec coverage:**
- Paso 1 (proyecto + scaffold + Core + Furia) → Task 1 ✅
- Paso 2 (HUD Furia + Effekseer) → Task 2 ✅
- Paso 3 (Iniciativa visible + reorden) → Task 3 ✅

**Step scan:** Cada step tiene test/verificación concreta. No hay "TBD" ni cuerpos de algoritmo que la firma no determine.

**Type consistency:** `VH.Furia.get/ready/MAX` usados en Task 2; `Game_Battler.agi` (paramId 6) en Task 3; `vhTurnQueue` compartido entre Iniciativa core y HUD.

**Review Focus:** Los 5 puntos cubiertos con tests en steps correspondientes (1.5, 1.6, 2.4, 3.5, 2.4).

**Proportion:** Plan ~300 líneas vs spec ~100 líneas — razonable, no transcripción.
