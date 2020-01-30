"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GmailClient = /** @class */ (function () {
    function GmailClient() {
    }
    GmailClient.prototype.connect = function () {
        console.log("Connecting to Gmail");
    };
    GmailClient.prototype.getEmails = function () {
        console.log("Downloading emails from Gmail");
    };
    GmailClient.prototype.disconnect = function () {
        console.log("Disconnecting from Gmail");
    };
    return GmailClient;
}());
exports.GmailClient = GmailClient;
