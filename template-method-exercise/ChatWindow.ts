import { Window } from "./Window";

export class ChatWindow extends Window {
    protected onClosing(): void {
        console.log("Chat window saving persistent state while closing...");
    }

    protected onClosed(): void {
        console.log("Disconnecting from the server...");
    }
}