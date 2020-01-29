import { EventHandler } from "./EventHandler";

export abstract class UIControl {
    private eventHandlers: EventHandler[] = [];

    addEventHandler(eventHandler: EventHandler): void {
        this.eventHandlers.push(eventHandler);
    }

    protected notifyEventHandlers(): void {
        this.eventHandlers.forEach((eventHandler: EventHandler) => {
            eventHandler.update();
        });
    }
}