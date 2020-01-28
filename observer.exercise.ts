import { StatusBar } from "./observe-exercise/StatusBar";
import { Stock } from "./observe-exercise/Stock";
import { StockListView } from "./observe-exercise/StockListView";

function renderTemplate() {
    statusBar.show();
    stockListView.show();
}

const statusBar = new StatusBar();
const stockListView = new StockListView();

let appleStock = new Stock('Apple', 'USD', 1.24); 
let toyotaStock = new Stock('Toyota', 'USD', 3.24); 
let louisVittonStock = new Stock('LouisVitton', 'EUR', 0.24); 

statusBar.addStock(appleStock);
stockListView.addStock(toyotaStock);
stockListView.addStock(louisVittonStock);

renderTemplate();

appleStock.setPrice(1.61);
toyotaStock.setPrice(5.02);
louisVittonStock.setPrice(0.59);


// Exercise We’re building an application for watching the price of various stocks.
// There are two places in our application where we need to display the stocks:  
//
// -StatusBar: shows the popular stocks  
// -StockListView: shows the complete list of stocks 
//
// When the price of a stock changes, the corresponding views (StatusBar and/or StockListView) need to 
// be refreshed to reflect the latest price.  Our application currently does not have the ability to 
// communicate the change in stock prices to the corresponding views.  Use the observer pattern to solve this problem. 