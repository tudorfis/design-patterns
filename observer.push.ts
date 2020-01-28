import { DataSource } from "./observer-push/DataSource";
import { SpreadSheet } from "./observer-push/Spreadsheet";
import { Chart } from "./observer-push/Chart";
import { Switch } from "./observer-push/Switch";

let dataSourceSpreadsheets = new DataSource<string>();
let dataSourceCharts = new DataSource<number>();
let dataSourceSwitches = new DataSource<boolean>();

let spreadsheet1 = new SpreadSheet();
let spreadsheet2 = new SpreadSheet();
let chart1 = new Chart();
let switch1 = new Switch();

dataSourceSpreadsheets.addObserver(spreadsheet1);
dataSourceSpreadsheets.addObserver(spreadsheet2);
dataSourceCharts.addObserver(chart1);
dataSourceSwitches.addObserver(switch1);

dataSourceSpreadsheets.setValue('tudor');
dataSourceCharts.setValue(1);
dataSourceSwitches.setValue(true);
dataSourceSpreadsheets.removeObserver(spreadsheet2);
dataSourceSpreadsheets.setValue('marian');

let switch2 = new Switch();
dataSourceSwitches.addObserver(switch2);
dataSourceSwitches.setValue(false);


// PROBLEM: implement a way for different UI such as chart, spreadsheets and switches to update 
// from a single source of through, when stuff changes there. A way to notify and update
// similar to publishing/subscribing behaviour.