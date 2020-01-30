import { AbstactUndoableCommand } from "./AbstactUndoableCommand";
import { VideoEditor } from "./VideoEditor";
import { History } from "./History";

export class SetTextCommand extends AbstactUndoableCommand {
    constructor(
        private text: string,
        protected videoEditor: VideoEditor,
        protected history: History
    ) { 
        super(videoEditor, history);
    }

    undo(): void {
        this.videoEditor.removeText();
    }

    doExecute(): void {
        this.videoEditor.setText(this.text);
    }
}