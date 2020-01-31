import { Connection } from "./Connection";
import { AuthToken } from "./AuthToken";
import { Message } from "./Message";

export class NotificationServer {
    connect(ipAddress: string): Connection {
        return new Connection();
    }

    authenticate(appID: string, key: string): AuthToken {
        return new AuthToken();
    }

    send(authToken: AuthToken, message: Message, target: string) {
        console.log(`
            Sending a message...
            target="${target}"
            message="${message.getContent()}"
        `);
    }
}