/*:
 * @target MZ
 * @plugindesc [VH_Furia v0.1] Furia Nórdica: barra, carga por riesgo, umbral 100%.
 * @author Angel / Sora
 * @orderAfter VH_Core
 *
 * @help
 * Requiere VH_Core (config en data/VH_Furia.json).
 *
 * MVP:
 *  - Cada battler guarda _vhFuria (0..100).
 *  - +cargaDanioRecibido*100 al recibir daño (x2 si HP < 50%).
 *  - +cargaAtaque*100 al ejecutar un ataque.
 *  - Al 100: skill definitiva habilitada (skId parametrizado abajo por actor).
 *  - API: VH.Furia.get(actor), .add(actor,n), .consume(actor).
 *
 * Gloria o Muerte y Ragnarök Mode: paso 2 del plan (no rompen esta v0.1).
 */
(function () {
  "use strict";
  const VH = (window.VH = window.VH || {});
  VH.Furia = VH.Furia || {};

  const MAX = 100;

  VH.Furia.cfg = function () {
    return (VH.Core && VH.Core.cfg.VH_Furia) || {
      cargaAtaque: 0.10,
      cargaDanioRecibido: 0.15,
      umbralRiesgo: 0.50,
      multiplicadorRiesgo: 2.0,
    };
  };

  VH.Furia.get = function (battler) {
    return battler._vhFuria || 0;
  };

  VH.Furia.add = function (battler, n) {
    const before = VH.Furia.get(battler);
    battler._vhFuria = Math.max(0, Math.min(MAX, before + n));
    if (before < MAX && battler._vhFuria >= MAX) {
      VH.Core && VH.Core.log("¡Furia máxima!", battler.name ? battler.name() : "?");
    }
  };

  VH.Furia.consume = function (battler) {
    battler._vhFuria = 0;
  };

  VH.Furia.ready = function (battler) {
    return VH.Furia.get(battler) >= MAX;
  };

  // --- Carga al recibir daño (con multiplicador por riesgo) -----------------
  const _Game_Battler_gainHp = Game_Battler.prototype.gainHp;
  Game_Battler.prototype.gainHp = function (value) {
    _Game_Battler_gainHp.call(this, value);
    if (value < 0 && this.isAlive()) {
      const c = VH.Furia.cfg();
      const ratio = this.hp / this.mhp;
      const mult = ratio < c.umbralRiesgo ? c.multiplicadorRiesgo : 1;
      VH.Furia.add(this, c.cargaDanioRecibido * 100 * mult);
    }
  };

  // --- Carga al atacar -------------------------------------------------------
  const _Game_Action_execute = Game_Action.prototype.execute;
  Game_Action.prototype.execute = function (target, actionResult) {
    _Game_Action_execute.call(this, target, actionResult);
    const c = VH.Furia.cfg();
    if (this.isAttack() || this.isSkill()) {
      VH.Furia.add(this.subject(), c.cargaAtaque * 100);
    }
  };

  // --- Init en combate -------------------------------------------------------
  const _Game_Actor_init = Game_Actor.prototype.init;
  Game_Actor.prototype.init = function () {
    _Game_Actor_init.call(this);
    this._vhFuria = this._vhFuria || 0;
  };

  // Reset por combate (la furia no arrastra entre batallas en el MVP)
  const _Game_Actor_onBattleStart = Game_Actor.prototype.onBattleStart || function () {};
  Game_Actor.prototype.onBattleStart = function () {
    _Game_Actor_onBattleStart.call(this);
    this._vhFuria = 0;
  };

  // --- Regla de uso de definitiva (v0.1: notetag <vhRequireFuria:100>) ------
  const _Game_Action_meetsSkillRequirements =
    Game_Action.prototype.meetsSkillRequirements;
  Game_Action.prototype.meetsSkillRequirements = function (subject) {
    if (!_Game_Action_meetsSkillRequirements.call(this, subject)) return false;
    const item = this.item();
    if (item && item.meta && item.meta.vhRequireFuria !== undefined) {
      return VH.Furia.get(subject) >= Number(item.meta.vhRequireFuria);
    }
    return true;
  };

  VH.Core && VH.Core.log("VH_Furia v0.1 activo");
})();
