import { EncryptionAlgorithm } from "./EncryptionAlgorithm";

export class DESEncryption implements EncryptionAlgorithm {
    encrypt(message: string): void {
        console.log("Encrypting message using DES");
        console.log(`message : ${message}`);
    }
}