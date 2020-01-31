import { Device } from "./Device";

export class SonyTV implements Device {
    turnOn(): void {
        console.log("Turning SonyTV on...");
    }    
    
    turnOff(): void {
        console.log("Turning SonyTV off...");
    }
    
    setChannel(number: number) {
        console.log("Setting channel on SonyTV to " + number);
    }

    changeMovie(movieName: string) {
        console.log("Changing movie on SonyTV to " + movieName);
    }
}