import { Observer } from "./Observer";

export class Switch implements Observer<boolean> {
    update(value: boolean): void {
        console.log(`Notified this switch with a boolean of ${value}`);
    }
}