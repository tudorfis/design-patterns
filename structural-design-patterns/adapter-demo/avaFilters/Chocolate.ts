import { AvaFilter } from "./AvaFilter";
import { Image } from "../Image";

export class Chocolate implements AvaFilter {
    init(): void {
        console.log('Initializing chocolate filter...');
    }    

    render(image: Image): void {
        console.log('Applying chocolate filter...');
    }

}