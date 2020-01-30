"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.render = function () {
        console.log('Rendering shape...');
    };
    Shape.prototype.move = function () {
        console.log('Moving shape...');
    };
    return Shape;
}());
exports.Shape = Shape;
