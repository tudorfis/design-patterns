import { EmailProvider } from "./EmailProvider";

export class EmailClient {
    private providers: EmailProvider[] = [];

    addProvider(provider: EmailProvider): void {
        this.providers.push(provider);
    }

    downloadEmails() {
        this.providers.forEach((provider: EmailProvider) => {
            provider.downloadEmails();
        });
    }
}