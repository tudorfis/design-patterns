import { DataSource } from "./observer/DataSource";
import { SpreadSheet } from "./observer/Spreadsheet";
import { Chart } from "./observer/Chart";
import { Switch } from "./observer/Switch";

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
