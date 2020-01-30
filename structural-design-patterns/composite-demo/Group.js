"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Group = /** @class */ (function () {
    function Group() {
        this.components = [];
    }
    Group.prototype.addComponent = function (component) {
        this.components.push(component);
    };
    Group.prototype.render = function () {
        this.components.forEach(function (component) {
            component.render();
        });
    };
    Group.prototype.move = function () {
        this.components.forEach(function (component) {
            component.move();
        });
    };
    return Group;
}());
exports.Group = Group;
