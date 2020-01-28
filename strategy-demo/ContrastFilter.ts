import { Filter } from "./Filter";

export class ContrastFilter implements Filter {
    apply(fileName: string): void {
        console.log(`Applying contrast filter to ${fileName}`);
    }
}