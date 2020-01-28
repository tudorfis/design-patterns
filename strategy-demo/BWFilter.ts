import { Filter } from "./Filter";

export class BWFilter implements Filter {
    apply(fileName: string): void {
        console.log(`Applying B&W filter to ${fileName}`);
    }
}