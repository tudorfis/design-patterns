import { EditorHistory } from "./EditorHistory";
import { EditorState } from "./EditorState";

export interface EditorConfig {
    saveHistory: boolean;
}

export class Editor {
    private _content: string;
    private _editorHistory: EditorHistory;
    
    constructor(
        private _config?: EditorConfig
    ) { 
        if (this._config && this._config.saveHistory) {
            this._editorHistory = new EditorHistory();
        }
    }

    setContent(content: string): void {
        this._content = content;
        if (this._config.saveHistory) {
            this._editorHistory.addState(new EditorState(this._content));
        }
    }

    getContent(): string {
        return this._content;
    }

    undo(): void {
        if (this._config.saveHistory) {
            this._content = this._editorHistory.restoreToPreviousState().getContent();
        }
    }

}