import { Observer } from "./Observer";
import { DataSource } from "../observer-pull/DataSource";

export class Chart implements Observer {
    constructor(
        private dataSource: DataSource<number>
    ) { }

    update(): void {
        console.log(`Chart got updated with this number ${this.dataSource.getValue()}`);
    }
}