import { UIControl } from "./UIControl";

export class TextBox extends UIControl {
    private text: string = '';

    public getText(): string {
        return this.text;
    }

    public setText(text: string): void {
        this.text = text;
        this.notifyEventHandlers();
    }

    public isEmpty(): boolean {
        return !(this.text as string);
    }

}