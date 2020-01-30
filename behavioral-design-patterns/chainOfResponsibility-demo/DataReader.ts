
export class DataReader {
    read(fileName: string): void {
        if (fileName.indexOf(".xls") !== -1) {
            console.log("Reading data from an Excel spreadsheet");
        } else if (fileName.indexOf(".numbers") !== -1) {
            console.log("Reading data from an Numbers spreadsheet");
        } else if (fileName.indexOf(".qbw") !== -1) {
            console.log("Reading data from an Quickbooks file");
        } else {
            console.log("File format not supported");
        }
    }
}