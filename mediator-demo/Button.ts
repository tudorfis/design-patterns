import { UIControl } from "./UIControl";
import { DialogBox } from "./DialogBox";

export class Button implements UIControl {
    private _enabled: boolean;

    constructor(
        public owner: DialogBox
    ) {}

    isEnabled(): boolean {
        return this._enabled;
    }

    setEnabled(enabled: boolean) {
        this._enabled = enabled;
        this.owner.changed(this);
    }


}