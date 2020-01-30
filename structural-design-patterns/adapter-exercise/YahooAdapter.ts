import { EmailProvider } from "./EmailProvider";
import { YahooClient } from "./yahoo/YahooClient";

export class YahooAdapter implements EmailProvider {
    private yahooClient = new YahooClient();
    
    downloadEmails(): void {
        this.yahooClient.connectYahoo();
        this.yahooClient.getEmailsYahoo();
        this.yahooClient.disconnect();
    }

}