import { UIControl } from "./UIControl";
import { DialogBox } from "./DialogBox";

export class ListBox implements UIControl {
    private selection: string;

    constructor(
        public owner: DialogBox
    ) {}
    
    public getSelection(): string {
        return this.selection;
    }

    public setSelection(selection: string): void {
        this.selection = selection;
        this.owner.changed(this);
    }

}