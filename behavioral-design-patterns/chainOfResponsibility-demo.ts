import { Compressor } from "./chainOfResponsibility-demo/Compressor";
import { Logger } from "./chainOfResponsibility-demo/Logger";
import { Authenticator } from "./chainOfResponsibility-demo/Authenticator";
import { Encryptor } from "./chainOfResponsibility-demo/Encryptor";
import { WebServer } from "./chainOfResponsibility-demo/WebServer";
import { HttpRequest } from "./chainOfResponsibility-demo/HttpRequest";

console.log('===================================');

const compressor = new Compressor(null);
const logger = new Logger(compressor);
const authenticator = new Authenticator(logger);

const server1 = new WebServer(authenticator);
server1.handle(new HttpRequest("admin", "123456"));

console.log('===================================');

const server2 = new WebServer(new Encryptor(new Compressor(new Logger(new Authenticator(null)))));
server2.handle(new HttpRequest("admin", "123"));

// exercise
// implement a handler to pipe from one request to another similar to httpRequest in real life
// use the chain of responsibility to do this.