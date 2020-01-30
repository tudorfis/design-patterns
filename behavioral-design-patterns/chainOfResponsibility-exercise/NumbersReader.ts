
import { DataReader } from "./DataReader";

export class NumbersReader extends DataReader {

    getExtension(): string {
        return '.numbers';
    }

    doRead(fileName: string): void {
        console.log(`Reading data from an Numbers spreadsheet with the fileName = ${fileName}`);
    }
}