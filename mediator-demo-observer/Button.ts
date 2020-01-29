import { UIControl } from "./UIControl";

export class Button extends UIControl {
    private _enabled: boolean;

    isEnabled(): boolean {
        return this._enabled;
    }

    setEnabled(enabled: boolean) {
        this._enabled = enabled;
        this.notifyEventHandlers();
    }


}