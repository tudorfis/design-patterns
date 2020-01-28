import { TravelMode } from "./TravelMode";

export class Driving implements TravelMode {
    getEta(): number {
        console.log('Calculating ETA (Driving)');
        return 1;
    }    

    getDirection(): number {
        console.log('Calculating direction (Driving)');
        return 1;
    }
}