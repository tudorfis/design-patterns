
export abstract class DataReader {
    private next: DataReader;

    setNext(next: DataReader): void {
        this.next = next;
    }

    read(fileName: string): void {
        if (fileName.indexOf(this.getExtension()) !== -1) {
            this.doRead(fileName);
        } else {
            console.log(`File format not supported extension = ${this.getExtension()}`);
        }

        if (!!this.next) {
            this.next.read(fileName);
        }
    }

    protected abstract getExtension(): string;
    protected abstract doRead(fileName: string): void;
}