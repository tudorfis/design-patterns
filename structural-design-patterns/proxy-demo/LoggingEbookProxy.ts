import { Ebook } from "./Ebook";
import { RealEbook } from "./RealEbook";

export class LoggingEbookProxy implements Ebook {
    private ebook: RealEbook;

    constructor(
        private fileName: string
    ){}

    show(): void {
        if (!this.ebook) {
            this.ebook = new RealEbook(this.fileName);
        }
        console.log("Logging ebook...");
        this.ebook.show();
    }

    getFileName(): string {
        return this.fileName;
    }
}

