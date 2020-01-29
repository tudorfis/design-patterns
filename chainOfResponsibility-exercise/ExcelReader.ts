import { DataReader } from "./DataReader";

export class ExcelReader extends DataReader {

    getExtension(): string {
        return '.xls';
    }

    doRead(fileName: string): void {
        console.log(`Reading data from an Excel spreadsheet with the fileName = ${fileName}`);
    }
}