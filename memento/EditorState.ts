
export class EditorState {
    constructor(
        private readonly _content: string
    ) { }

    getContent(): string {
        return this._content;
    }
}