import { Compressor } from "./Compressor";
import { Filter } from "./Filter";

export class FileStorageService {
    constructor(
        private compressor: Compressor,
        private filter: Filter
    ) { }

    saveFile(fileName: string) {
        console.log(`Preparing file ${fileName} ... `);
        
        this.compressor.compress(fileName);
        this.filter.apply(fileName);
        
        console.log(`Saving file ${fileName} ... `);
    }
}