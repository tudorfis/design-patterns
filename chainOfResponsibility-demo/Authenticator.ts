import { HttpRequest } from "./HttpRequest";
import { Handler } from "./Handler";

export class Authenticator extends Handler {
    constructor(protected next: Handler) {
        super(next);
    }
    
    doHandle(request: HttpRequest): void {
        const isValid = (
            request.getUsername() === 'admin' &&
            request.getPassword() === '123456'
        );
        console.log(`Authentication ... isValid = ${isValid}`);
    }
}