import { Ebook } from "./Ebook";

export class RealEbook implements Ebook {
    constructor(
        private fileName: string
    ) {
        this.load();
    }

    private load(): void {
        console.log("Loading the ebook " + this.fileName);
    }

    getFileName(): string {
        return this.fileName;
    }

    show(): void {
        console.log("Showing the ebook "+  this.fileName);
    }

    
}