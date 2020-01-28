import { Observer } from './Observer';
import { DataSource } from '../observer-pull/DataSource';

export class SpreadSheet implements Observer {
    constructor(
        private dataSource: DataSource<string>
    ) { }

    update(): void {
        console.log(`Spreadsheet got notified with this string ${this.dataSource.getValue()}`);
    }
}