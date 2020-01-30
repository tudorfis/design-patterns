import { Stream } from "./Stream";

export class CloudStream implements Stream {
    write(data: string): void {
        console.log(`Writing data: ${data} to cloud stream...`);
    }

}