import { Image } from "../Image";

export interface AvaFilter {
    init(): void;
    render(image: Image): void;
}