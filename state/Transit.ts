import { TravelMode } from "./TravelMode";

export class Transit implements TravelMode {
    getEta(): number {
        console.log('Calculating ETA (transit)');
        return 3;
    }    

    getDirection(): number {
        console.log('Calculating direction (transit)');
        return 3;
    }
}