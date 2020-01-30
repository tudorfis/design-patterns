import { Observer } from "./Observer";
import { DataSource } from "../observer-pull/DataSource";

export class Switch implements Observer {
    constructor(
        private dataSource: DataSource<boolean>
    ) { }

    update(): void {
        console.log(`Notified this switch with a boolean of ${this.dataSource.getValue()}`);
    }
}