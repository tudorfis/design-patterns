import { EmailProvider } from "./EmailProvider";
import { GmailClient } from "./gmail/GmailClient";

export class GmailAdapter implements EmailProvider {
    private gmailClient = new GmailClient();
    
    downloadEmails(): void {
        this.gmailClient.connect();
        this.gmailClient.getEmails();
        this.gmailClient.disconnect();
    }
}