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
var HumanResource = /** @class */ (function (_super) {
    __extends(HumanResource, _super);
    function HumanResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HumanResource.prototype.deploy = function () {
        console.log("Deploying human resource ...");
    };
    return HumanResource;
}(Resource_1.Resource));
exports.HumanResource = HumanResource;
