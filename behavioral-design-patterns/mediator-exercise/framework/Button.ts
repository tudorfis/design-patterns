import { UIControl } from "./UIControl"

export class Button extends UIControl {
    private enabled: boolean = false;

    public isEnabled(): boolean {
        return this.enabled;
    }

    public setEnabled(enabled: boolean): void {
        this.enabled = enabled;
        this.notifyEventHandlers();
    }

}