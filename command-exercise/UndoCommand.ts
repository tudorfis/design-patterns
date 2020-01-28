import { Command } from "../command-demo/fx/Command";
import { History } from "./History";
import { UndoableCommand } from "./UndoableCommand";

export class UndoCommand implements Command {
    constructor(
        private history: History
    ) { }

    execute(): void {
        if (this.history.size() > 0) {
            (this.history.pop() as UndoableCommand).undo();
        }
    }
}