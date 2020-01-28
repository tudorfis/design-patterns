import { Observer } from './Observer';

export class SpreadSheet implements Observer<string> {
    update(value: string): void {
        console.log(`Spreadsheet got notified with this string ${value}`);
    }
}