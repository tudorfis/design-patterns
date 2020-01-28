import { Compressor } from "./Compressor";

export class JPEGCompression implements Compressor {
    compress(fileName: string): void {
        console.log(`Compressing ${fileName} to JPEG...`);
    }
}