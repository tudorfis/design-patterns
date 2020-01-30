import { FileStorageService } from "./strategy-demo/FileStorageService";
import { BWFilter } from "./strategy-demo/BWFilter";
import { JPEGCompression } from "./strategy-demo/JPEGCompression";
import { PNGCompression } from "./strategy-demo/PNGCompression";
import { ContrastFilter } from "./strategy-demo/ContrastFilter";

let fileStorageService: FileStorageService = null;

console.log('==================================');

fileStorageService = new FileStorageService(new JPEGCompression(), new BWFilter());
fileStorageService.saveFile('~/images/pui-si-bilu.jpeg');

console.log('==================================');

fileStorageService = new FileStorageService(new PNGCompression(), new ContrastFilter());
fileStorageService.saveFile('~/images/pui-la-untold.png');


// Exercise

// We have a file storage service. We want to be able to apply different image compression and image filtering
// before saving the file. Implement the strategy pattern to be able to achieve this. Make it extensible.