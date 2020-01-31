import { Device } from "./Device";

export class PanasonicTV implements Device {
    turnOn(): void {
        console.log("Turning PanasonicTV on...");
    }    
    
    turnOff(): void {
        console.log("Turning PanasonicTV off...");
    }
    
    setChannel(number: number) {
        console.log("Setting channel on PanasonicTV to " + number);
    }

    changeMovie(movieName: string) {
        console.log("Changing movie on PanasonicTV to " + movieName);
    }
}