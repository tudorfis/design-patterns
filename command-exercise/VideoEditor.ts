

export class VideoEditor {
    private contrast: number = 0;
    private text: string = '';

    setText(text: string) {
        this.text = text;
    }

    removeText(): void {
        this.text = "";
    }

    getContrast(): number {
        return this.contrast;
    }

    setContrast(contrast: number): void {
        this.contrast = contrast;
    }

    toString(): string {
        return `VideoEditor {contrast=${this.contrast}, text=${this.text}}`;
    }
}