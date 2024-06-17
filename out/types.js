'use client'


var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// types.ts
var EAddressType;
(function(EAddressType2) {
  EAddressType2["shipping"] = "shipping";
  EAddressType2["billing"] = "billing";
})(EAddressType || (EAddressType = {}));
var ConsolidationStatuses;
(function(ConsolidationStatuses2) {
  ConsolidationStatuses2["pending"] = "Pending";
  ConsolidationStatuses2["in_progress"] = " In Progress";
  ConsolidationStatuses2["on_hold"] = "On Hold";
  ConsolidationStatuses2["canceled"] = "Canceled";
  ConsolidationStatuses2["completed"] = "Completed";
})(ConsolidationStatuses || (ConsolidationStatuses = {}));
var EUnit;
(function(EUnit2) {
  EUnit2["imperial"] = "imperial";
  EUnit2["metric"] = "metric";
})(EUnit || (EUnit = {}));
export {
  EUnit,
  EAddressType,
  ConsolidationStatuses
};
