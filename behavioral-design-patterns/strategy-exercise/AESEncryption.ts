import { EncryptionAlgorithm } from "./EncryptionAlgorithm";

export class AESEncryption implements EncryptionAlgorithm {
    encrypt(message: string): void {
        console.log("Encrypting message using AES");
        console.log(`message : ${message}`);
    }
}