import { CloudStream } from "./decorator-demo/CloudStream";
import { CompressedCloudStream } from "./decorator-demo/CompressedCloudStream";
import { EncryptedCloudStream } from "./decorator-demo/EncryptedCloudStream";


const cloudStream = new EncryptedCloudStream(new CompressedCloudStream(new CloudStream()));
cloudStream.write("tudor todorescu");

// Exercise

// Create a way to compress, encrypt and much more the data according to cases
// Do this by implementing the decorator pattern