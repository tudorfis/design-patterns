"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailClient = /** @class */ (function () {
    function EmailClient() {
        this.providers = [];
    }
    EmailClient.prototype.addProvider = function (provider) {
        this.providers.push(provider);
    };
    EmailClient.prototype.downloadEmails = function () {
        this.providers.forEach(function (provider) {
            provider.downloadEmails();
        });
    };
    return EmailClient;
}());
exports.EmailClient = EmailClient;
