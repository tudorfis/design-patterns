"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailClient_1 = require("./adapter-exercise/EmailClient");
var YahooAdapter_1 = require("./adapter-exercise/YahooAdapter");
var emailClient = new EmailClient_1.EmailClient();
emailClient.addProvider(new YahooAdapter_1.YahooAdapter());
emailClient.downloadEmails();
// Exercise
// We’re building an email client like Outlook. Our client should be able to connect
// to different mail servers such as Gmail, Yahoo, etc. In the adapter package,
// you can see an interface called EmailProvider. 
// Our EmailClient class talks to this interface so it’s not coupled to a particular
// mail service. Here’s the problem: In the Gmail package, you can find 
// the class (or classes) that Google provides to connect to Gmail. 
// These classes are shipped as a third-party library that we can add 
// to our application. We want to re-use these classes but the GmailClient
// class does not extend our EmailProviderinterface. 
//Use the adapter problem to convert the interface of GmailClient.
