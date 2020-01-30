"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var YahooClient_1 = require("./yahoo/YahooClient");
var YahooAdapter = /** @class */ (function () {
    function YahooAdapter() {
        this.yahooClient = new YahooClient_1.YahooClient();
    }
    YahooAdapter.prototype.downloadEmails = function () {
        this.yahooClient.connectYahoo();
        this.yahooClient.getEmailsYahoo();
        this.yahooClient.disconnect();
    };
    return YahooAdapter;
}());
exports.YahooAdapter = YahooAdapter;
