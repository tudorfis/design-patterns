import { TravelMode } from "./TravelMode";

export class Bicyling implements TravelMode {
    getEta(): number {
        console.log('Calculating ETA (Bicyling)');
        return 2;
    }    

    getDirection(): number {
        console.log('Calculating direction (Bicyling)');
        return 2;
    }
}