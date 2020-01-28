import { DataSource } from "./observer-pull/DataSource";
import { SpreadSheet } from "./observer-pull/Spreadsheet";
import { Chart } from "./observer-pull/Chart";
import { Switch } from "./observer-pull/Switch";

let dataSourceSpreadsheets = new DataSource<string>();
let dataSourceCharts = new DataSource<number>();
let dataSourceSwitches = new DataSource<boolean>();

let spreadsheet1 = new SpreadSheet(dataSourceSpreadsheets);
let spreadsheet2 = new SpreadSheet(dataSourceSpreadsheets);
let chart1 = new Chart(dataSourceCharts);
let switch1 = new Switch(dataSourceSwitches);

dataSourceSpreadsheets.addObserver(spreadsheet1);
dataSourceSpreadsheets.addObserver(spreadsheet2);
dataSourceSpreadsheets.setValue("Tudor");

dataSourceCharts.addObserver(chart1);
dataSourceCharts.setValue(1);

dataSourceSwitches.addObserver(switch1);
dataSourceSwitches.setValue(true);


// PROBLEM: implement a way for different UI such as chart, spreadsheets and switches to update 
// from a single source of through, when stuff changes there. A way to notify and update
// similar to publishing/subscribing behaviour.