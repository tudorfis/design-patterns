import { EventHandler } from "./EventHandler";

export abstract class UIControl {
    private eventHandlers: EventHandler[] = [];

    attachEventHandler(eventHandler: EventHandler) {
        this.eventHandlers.push(eventHandler);
    }

    notifyEventHandlers() {
        this.eventHandlers.forEach((eventHandler: EventHandler) => {
            eventHandler.handle();
        });
    }
}