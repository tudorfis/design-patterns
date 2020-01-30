import { Stream } from "./Stream";

export class CompressedCloudStream implements Stream {
    constructor(
        private stream: Stream
    ) { }

    write(data: string): void {
        const compressed = this.compress(data);
        this.stream.write(compressed);
    }

    private compress(data: string): string {
        return data.substr(0, 5);
    }
}