import { Command } from "./fx/Command";

export class OpenNewFileCommand implements Command {
    execute(): void {
        console.log("Executing OpenNewFileCommand command ...");
    }
}