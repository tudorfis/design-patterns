import { AbstractArtefact } from "./AbstractArtefact";
import { Artefact } from "./Artefact";
import { ErrorDecorator } from "./ErrorDecorator";
import { MainDecorator } from "./MainDecorator";

export class Editor {
    openProject(path: string): void {
        const artefacts: AbstractArtefact[] = [
            new Artefact("main.ico"),
            new Artefact("demo.ico"),
            new Artefact("emailClient.ico"),
            new Artefact("emailProvider.ico")
        ];

        // we can apply multiple decorators
        artefacts[0] = new ErrorDecorator(new ErrorDecorator(new MainDecorator(artefacts[0])));
        artefacts[2] = new ErrorDecorator(artefacts[2]);

        // In the future, we can create a SourceControlDecorator that adds
        // a special marker to the icon if artefacts are not committed ot the repository.
        artefacts.forEach((artefact: AbstractArtefact) => {
            console.log(artefact.render());
        });
    }
}