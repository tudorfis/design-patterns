"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AvaFilterAdapter = /** @class */ (function () {
    function AvaFilterAdapter(avaFilter) {
        this.avaFilter = avaFilter;
    }
    AvaFilterAdapter.prototype.apply = function (image) {
        this.avaFilter.init();
        this.avaFilter.render(image);
    };
    return AvaFilterAdapter;
}());
exports.AvaFilterAdapter = AvaFilterAdapter;
