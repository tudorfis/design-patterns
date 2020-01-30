"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GmailClient_1 = require("./gmail/GmailClient");
var GmailAdapter = /** @class */ (function () {
    function GmailAdapter() {
        this.gmailClient = new GmailClient_1.GmailClient();
    }
    GmailAdapter.prototype.downloadEmails = function () {
        this.gmailClient.connect();
        this.gmailClient.getEmails();
        this.gmailClient.disconnect();
    };
    return GmailAdapter;
}());
exports.GmailAdapter = GmailAdapter;
