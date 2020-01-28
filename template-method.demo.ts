import { TransferMoneyTask } from "./template-method-demo/TransferMoneyTask";
import { GenerateReportTask } from "./template-method-demo/GenerateReportTask";


let transferMoneyTask = new TransferMoneyTask();
transferMoneyTask.execute();

let generateReportTask = new GenerateReportTask();
generateReportTask.execute();

// Exercise

// There are to tasks needed do be made, however for each one, and future tasks we need to record the audit
// create a template method so each time either task executes, the audit trail executes as well