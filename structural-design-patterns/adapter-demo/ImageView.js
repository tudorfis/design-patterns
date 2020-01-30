"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageView = /** @class */ (function () {
    function ImageView(image) {
        this.image = image;
    }
    ImageView.prototype.apply = function (filter) {
        filter.apply(this.image);
    };
    return ImageView;
}());
exports.ImageView = ImageView;
