
export abstract class Window {
    close(): void {
        this.onClosing();
        console.log("Removing the window from the screen");
        this.onClosed();
    }
    
    protected abstract onClosing(): void;
    protected abstract onClosed(): void;
}