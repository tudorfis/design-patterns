import { Resource } from "./Resource";

export class Team extends Resource {
    private resources: Resource[] = [];

    add(resource: Resource|Team): void { 
        this.resources.push(resource);
    }

    deploy(): void {
        this.resources.forEach((resource: Resource|Team) => {
            resource.deploy();
        });
    }
}