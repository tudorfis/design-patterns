"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main = /** @class */ (function () {
    function Main(_name) {
        this._name = _name;
    }
    Object.defineProperty(Main.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Main;
}());
var main = new Main("Tudor");
console.log(main.name);
