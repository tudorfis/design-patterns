import { NotificationServer } from "./NotificationServer";
import { Message } from "./Message";

export class NotificationService {
    static send(message: string, target: string): void {
        const server = new NotificationServer();
        const connection = server.connect("ip");
        const authToken = server.authenticate("appID", "key");
        server.send(authToken, new Message(message), target);
        connection.disconnect();
    }
}