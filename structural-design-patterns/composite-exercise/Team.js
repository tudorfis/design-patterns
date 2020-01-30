"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Resource_1 = require("./Resource");
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resources = [];
        return _this;
    }
    Team.prototype.add = function (resource) {
        this.resources.push(resource);
    };
    Team.prototype.deploy = function () {
        this.resources.forEach(function (resource) {
            resource.deploy();
        });
    };
    return Team;
}(Resource_1.Resource));
exports.Team = Team;
