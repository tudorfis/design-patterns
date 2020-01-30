import { AbstractArtefact } from "./AbstractArtefact";

export class Artefact implements AbstractArtefact {
    constructor(
        private name: string
    ) { }
    
    render(): string {
        return this.name
    }
}