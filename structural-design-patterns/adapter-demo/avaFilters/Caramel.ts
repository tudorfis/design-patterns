import { Image } from "../Image";
import { AvaFilter } from "./AvaFilter";

export class Caramel implements AvaFilter {
    init(): void {
        console.log('Initializing caramel filter...');
    }

    render(image: Image): void {
        console.log("Applying caramel Filter...")
    }
}