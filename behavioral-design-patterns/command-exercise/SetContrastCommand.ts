import { AbstactUndoableCommand } from "./AbstactUndoableCommand";
import { VideoEditor } from "./VideoEditor";
import { History } from "./History";

export class SetContrastCommand extends AbstactUndoableCommand {
    private prevContrast: number;

    constructor(
        private contrast: number,
        protected videoEditor: VideoEditor,
        protected history: History
    ) {
        super(videoEditor, history);
        this.prevContrast = videoEditor.getContrast();
    }

    protected doExecute(): void {
        this.videoEditor.setContrast(this.contrast);
    }

    undo(): void {
        this.videoEditor.setContrast(this.prevContrast);
    }
}