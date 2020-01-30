import { UndoableCommand } from "./UndoableCommand";
import { VideoEditor } from "./VideoEditor";
import { History } from "./History";

// The purpose of this class is to make sure all undoable commands have
// a VideoEditor and a History. Plus, whenever a command is executed,
// it's pushed in the history. This way, we don't have to remember to
// store each individual command in the history.
export abstract class AbstactUndoableCommand implements UndoableCommand {
    constructor(
        protected videoEditor: VideoEditor,
        protected history: History
    ) { }

    undo(): void {}

    execute(): void {
        // Another application of the template method pattern. This method
        // is defining a template for executing commands.
        this.history.push(this);
        this.doExecute();
    }

    protected abstract doExecute(): void;

}