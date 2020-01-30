"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageView_1 = require("./adapter-demo/ImageView");
var Image_1 = require("./adapter-demo/Image");
var VividFilter_1 = require("./adapter-demo/VividFilter");
var Caramel_1 = require("./adapter-demo/avaFilters/Caramel");
var AvaFilterAdapter_1 = require("./adapter-demo/AvaFilterAdapter");
var Chocolate_1 = require("./adapter-demo/avaFilters/Chocolate");
var imageView = new ImageView_1.ImageView(new Image_1.Image());
imageView.apply(new VividFilter_1.VividFilter());
imageView.apply(new AvaFilterAdapter_1.AvaFilterAdapter(new Caramel_1.Caramel()));
imageView.apply(new AvaFilterAdapter_1.AvaFilterAdapter(new Chocolate_1.Chocolate()));
// Exercise
// Create an adapter to be able to implement filters 
// from avaFilters in our existing photo application
