import { HttpRequest } from "./HttpRequest";
import { Handler } from "./Handler";


export class Compressor extends Handler {
    constructor(protected next: Handler) {
        super(next);
    }

    doHandle(request: HttpRequest): void {
        console.log("Compress ...");
    }
}