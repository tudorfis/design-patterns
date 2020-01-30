import { Stream } from "./Stream";

export class EncryptedCloudStream implements Stream {
    constructor(
        private stream: Stream
    ) { }

    write(data: string): void {
        const encrypted = this.encrypt(data);
        this.stream.write(encrypted);
    }

    private encrypt(data: string): string {
        return '^&$#*)(^%#*@(!@#';
    }
}