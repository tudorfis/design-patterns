import { AbstractArtefact } from "./AbstractArtefact";

export class MainDecorator implements AbstractArtefact {
    constructor(
        private artefact: AbstractArtefact
    ) { }

    render(): string {
        return this.artefact.render() + ' [Main]';
    }
}