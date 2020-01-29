import { UIControl } from "./UIControl";
import { DialogBox } from "./DialogBox";

export class TextBox implements UIControl {
    private content: string;

    constructor(
        public owner: DialogBox
    ) {}
    
    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
        this.owner.changed(this);
    }

}