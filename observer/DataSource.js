"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataSource = /** @class */ (function () {
    function DataSource() {
    }
    DataSource.prototype.getValue = function () {
        return this.value;
    };
    DataSource.prototype.setValue = function (value) {
        this.value = value;
    };
    return DataSource;
}());
exports.DataSource = DataSource;
