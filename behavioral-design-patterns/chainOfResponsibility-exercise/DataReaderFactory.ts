import { DataReader } from "./DataReader";
import { ExcelReader } from "./ExcelReader";
import { NumbersReader } from "./NumbersReader";
import { QuickBooksReader } from "./QuickBooksReader";

export class DataReaderFactory {
    static getDataReaderChain(): DataReader {
        const excelReader = new ExcelReader();
        const numbersReader = new NumbersReader();
        const quickBooksReader = new QuickBooksReader();

        quickBooksReader.setNext(numbersReader);
        numbersReader.setNext(excelReader);

        return quickBooksReader;
    }
}