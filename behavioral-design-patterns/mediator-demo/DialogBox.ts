import { UIControl } from "./UIControl";

export interface DialogBox {
    changed(control: UIControl): void;
}