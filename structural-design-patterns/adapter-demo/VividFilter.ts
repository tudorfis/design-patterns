import { Filter } from "./Filter";
import { Image } from "./Image";

export class VividFilter implements Filter {
    apply(image: Image): void {
        console.log("Applying vivid filter");
    }
}