import { EditorState } from "./EditorState"

export class EditorHistory {
    private _states: EditorState[] = [];

    addState(state: EditorState) {
        this._states.push(state);
    }

    restoreToPreviousState(): EditorState {
        this._states.pop();
        const lastIndex = this._states.length - 1;
        const lastState = this._states[lastIndex];
        return lastState;
    }
}