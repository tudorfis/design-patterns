import { TravelMode } from "./TravelMode";

export class DirectionService {
    constructor(
        private readonly travelMode: TravelMode
    ) { }

    getEta(): number {
        return this.travelMode.getEta();
    }

    getDirection(): number {
        return this.travelMode.getDirection();
    }
}