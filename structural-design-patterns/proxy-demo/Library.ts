import { Ebook } from "./Ebook";

interface LibraryEbookInterface {
    ebook: Ebook,
    fileName: string
}
export class Library {
    private ebooks: LibraryEbookInterface[] = [];

    add(ebook: Ebook): void {
        this.ebooks.push({ ebook, fileName: ebook.getFileName() })
    }

    openEbook(fileName: string) {
        const eArr = this.ebooks.filter((e: LibraryEbookInterface) => e.fileName === fileName);
        if (eArr[0]) {
            (eArr[0] as LibraryEbookInterface).ebook.show();
        }
    }
}