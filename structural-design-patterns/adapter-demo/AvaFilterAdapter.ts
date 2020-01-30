import { Filter } from "./Filter";
import { AvaFilter } from "./avaFilters/AvaFilter";
import { Image } from "./Image";

export class AvaFilterAdapter implements Filter {
    constructor(
        private avaFilter: AvaFilter
    ) {}

    apply(image: Image): void {
        this.avaFilter.init();
        this.avaFilter.render(image);
    }
}