import { Image } from "./Image";
import { Filter } from "./Filter";

export class ImageView {
    constructor(
        private image: Image
    ) {}

    apply(filter: Filter) {
        filter.apply(this.image);
    }
}