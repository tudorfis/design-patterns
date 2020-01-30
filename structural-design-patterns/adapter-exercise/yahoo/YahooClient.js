"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var YahooClient = /** @class */ (function () {
    function YahooClient() {
    }
    YahooClient.prototype.connectYahoo = function () {
        console.log("Connecting to Yahoo");
    };
    YahooClient.prototype.getEmailsYahoo = function () {
        console.log("Downloading emails from Yahoo");
    };
    YahooClient.prototype.disconnect = function () {
        console.log("Disconnecting from Yahoo");
    };
    return YahooClient;
}());
exports.YahooClient = YahooClient;
