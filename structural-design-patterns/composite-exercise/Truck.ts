import { Resource } from "./Resource";

export class Truck extends Resource {
    deploy(): void {
        console.log("Deploying truck ...");
    }
}