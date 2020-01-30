import { Task } from "./Task";

export class GenerateReportTask extends Task {
    protected doExecute(): void {
        console.log("Generate report task ...");
    }
}