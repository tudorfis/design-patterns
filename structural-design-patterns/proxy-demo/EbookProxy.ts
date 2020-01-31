import { Ebook } from "./Ebook";
import { RealEbook } from "./RealEbook";

export class EbookProxy implements Ebook {
    private ebook: RealEbook;
    constructor(
        private fileName: string
    ) { }

    show() {
        if (this.ebook === null) {
            this.ebook = new RealEbook(this.fileName);
        }
        this.ebook.show();
    }

    getFileName(): string {
        return this.fileName;
    }
}