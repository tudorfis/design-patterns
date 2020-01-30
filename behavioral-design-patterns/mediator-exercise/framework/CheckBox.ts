import { UIControl } from "./UIControl";

export class CheckBox extends UIControl {
    private checked: boolean = false;

    public isChecked(): boolean {
        return this.checked;
    }

    public setChecked(checked: boolean): void {
        this.checked = checked;
        this.notifyEventHandlers();
    }
}