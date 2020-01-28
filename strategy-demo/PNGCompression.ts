import { Compressor } from "./Compressor";

export class PNGCompression implements Compressor {
    compress(fileName: string): void {
        console.log(`Compressing ${fileName} to PNG...`);
    }
}