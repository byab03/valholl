/*:
 * @target MZ
 * @plugindesc [VH_Core v0.1] Núcleo Valhöll: carga JSONs de balance, utilidades, guardas.
 * @author Angel / Sora
 *
 * @help
 * Colocar como PRIMER plugin VH. Expone window.VH.Core con:
 *   VH.Core.cfg.nombre   -> config de balance (nunca hardcodeada en otros plugins)
 *   VH.Core.log(...)     -> log con prefijo
 *   VH.Core.validate()   -> guarda de integridad de IDs contra JSONs
 *
 * Los JSONs viven en data/ del proyecto (VH_Furia.json, VH_Runas.json,
 * VH_Vinculos.json, VH_Clima.json). Ver 04-ArquitecturaMZ.md §2-3.
 */
(function () {
  "use strict";

  const VH = (window.VH = window.VH || {});
  VH.Core = VH.Core || {};

  VH.Core.log = function (...args) {
    console.log("%c[VH]", "color:#d4a017;font-weight:bold", ...args);
  };
  VH.Core.warn = function (...args) {
    console.warn("[VH]", ...args);
  };

  // --- Carga de JSONs de balance -------------------------------------------
  VH.Core.cfg = {};
  const CONFIGS = ["VH_Furia", "VH_Runas", "VH_Vinculos", "VH_Clima"];

  VH.Core.loadConfigs = function (callback) {
    let pending = CONFIGS.length;
    const done = () => {
      if (--pending === 0) {
        VH.Core.log("configs cargadas:", Object.keys(VH.Core.cfg).join(", "));
        if (typeof callback === "function") callback();
      }
    };
    CONFIGS.forEach((name) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "data/" + name + ".json", true);
      xhr.overrideMimeType("application/json");
      xhr.onload = () => {
        try {
          VH.Core.cfg[name] = JSON.parse(xhr.responseText);
        } catch (e) {
          VH.Core.warn("JSON inválido:", name, e.message);
          VH.Core.cfg[name] = {};
        }
        done();
      };
      xhr.onerror = () => {
        VH.Core.warn("No se encontró data/" + name + ".json");
        VH.Core.cfg[name] = {};
        done();
      };
      xhr.send();
    });
  };

  // --- Guarda de integridad (arquitectura §7) -------------------------------
  // Si un save referencia una runa/vínculo que ya no existe tras update de
  // balance, loguea y degrada a fallback seguro: nunca crash silencioso.
  VH.Core.validate = function (saveIds, dictName) {
    const dict = VH.Core.cfg[dictName];
    if (!dict) return [];
    const bad = saveIds.filter((id) => !dict[id]);
    if (bad.length) VH.Core.warn(dictName + ": IDs huérfanos en save:", bad);
    return bad;
  };

  VH.Core.getRuna = function (id) {
    const d = (VH.Core.cfg.VH_Runas || {})[id];
    if (!d) VH.Core.warn("runa desconocida:", id);
    return d || null;
  };
  VH.Core.getVinculo = function (id) {
    const d = (VH.Core.cfg.VH_Vinculos || {})[id];
    if (!d) VH.Core.warn("vínculo desconocido:", id);
    return d || null;
  };

  // --- Hook de arranque: cargar configs junto al título ---------------------
  const _Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
  Scene_Boot.prototype.onDatabaseLoaded = function () {
    _Scene_Boot_onDatabaseLoaded.call(this);
    VH.Core.loadConfigs();
  };
})();
