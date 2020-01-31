
export interface Device {
    turnOn(): void;
    turnOff(): void;
    setChannel(number: number): void;
    changeMovie(movieName: string): void;
}