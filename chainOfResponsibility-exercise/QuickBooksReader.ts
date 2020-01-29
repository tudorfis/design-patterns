
import { DataReader } from "./DataReader";

export class QuickBooksReader extends DataReader {

    getExtension(): string {
        return '.qbw';
    }

    doRead(fileName: string): void {
        console.log(`Reading data from an QuickBooks spreadsheet with the fileName = ${fileName}`);
    }
}