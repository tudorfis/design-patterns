import { AbstractArtefact } from "./AbstractArtefact";

export class ErrorDecorator implements AbstractArtefact {
    
    constructor(
        private artefact: AbstractArtefact
    ) { }

    render(): string {
        return this.artefact.render() + " [Error]"
    };
}