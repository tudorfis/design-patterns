import { Resource } from "./Resource";

export class HumanResource extends Resource {
    deploy(): void {
        console.log("Deploying human resource ...");
    }
}