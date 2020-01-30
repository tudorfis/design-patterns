import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Encryptor extends Handler {
    constructor(protected next: Handler) {
        super(next);
    }

    doHandle(request: HttpRequest): void {
        console.log("Encryption ...");
    }
}