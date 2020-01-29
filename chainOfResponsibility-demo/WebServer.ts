import { HttpRequest } from "./HttpRequest";
import { Authenticator } from "./Authenticator";
import { Handler } from "./Handler";

export class WebServer {
    constructor(private handler: Handler) {}
    
    handle(request: HttpRequest): void {
        this.handler.handle(request);
    }
}