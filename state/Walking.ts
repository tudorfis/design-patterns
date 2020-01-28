import { TravelMode } from "./TravelMode";

export class Walking implements TravelMode {
    getEta(): number {
        console.log('Calculating ETA (walking)');
        return 4;
    }    

    getDirection(): number {
        console.log('Calculating direction (walking)');
        return 4;
    }
}