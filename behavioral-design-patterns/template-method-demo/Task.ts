import { AuditTrail } from "./AuditTrail";


export abstract class Task {
    private auditTrail: AuditTrail;

    constructor() { 
        this.auditTrail = new AuditTrail();
    }

    execute(): void {
        this.auditTrail.record();
        this.doExecute();
    }

    protected abstract doExecute(): void;
}