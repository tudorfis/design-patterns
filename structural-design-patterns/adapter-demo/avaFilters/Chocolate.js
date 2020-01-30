"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chocolate = /** @class */ (function () {
    function Chocolate() {
    }
    Chocolate.prototype.init = function () {
        console.log('Initializing chocolate filter...');
    };
    Chocolate.prototype.render = function (image) {
        console.log('Applying chocolate filter...');
    };
    return Chocolate;
}());
exports.Chocolate = Chocolate;
