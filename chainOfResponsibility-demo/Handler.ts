import { HttpRequest } from "./HttpRequest";

export abstract class Handler {
    constructor(
        protected next: Handler
    ) { }

    handle(request: HttpRequest): void {
        this.doHandle(request);
        if (!!this.next) this.next.handle(request);
    }

    abstract doHandle(request: HttpRequest): void;
}