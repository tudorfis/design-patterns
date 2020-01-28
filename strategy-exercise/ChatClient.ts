import { EncryptionAlgorithm } from "./EncryptionAlgorithm";

export class ChatClient {
    constructor(
        private encryptionAlgorithm?: EncryptionAlgorithm
    ) { }

    send(message: string): void {
        if (!this.encryptionAlgorithm || !this.encryptionAlgorithm.encrypt)
            console.log("Unsupported encryption algorithmthis.");
        else this.encryptionAlgorithm.encrypt(message);

        console.log("Sending the encrypted message...");
    }
}