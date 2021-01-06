'use strict'
var workingHours = ['6am:',
    '7am: ',
    '8am: ',
    '9am: ',
    '10am: ',
    '11am: ',
    '12pm: ',
    '1pm: ',
    '2pm: ',
    '3pm: ',
    '4pm: ',
    '5pm: ',
    '6pm: ',
    '7pm: ',
    'Daily Location Total:'];
var branchArray = [];
//Definition of Constructor 
function Branch(location, min, max, averCookiesPerCustomer,) {
    this.branchLocation = location;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.averCookiesCustomer = averCookiesPerCustomer;
    this.arrCustomerNumber = [];
    this.total = 0;
    this.arrhourlyCustomerNumberSales = [];
    branchArray.push(this);
}
//Protoype methods 
Branch.prototype.numberOfCustomers = function (min, max) {
    for (var i = 0; i < 14; i++) {
        this.arrCustomerNumber[i] = Math.floor(Math.random() * (max - min) + min);
    }
}
Branch.prototype.caculateHourlySales = function () {
    for (var i = 0; i < 14; i++) {
        this.arrhourlyCustomerNumberSales[i] = Math.floor(this.arrCustomerNumber[i] * this.averCookiesCustomer);
    }
}
Branch.prototype.caculateTotalSales = function () {
    for (var i = 0; i < this.arrhourlyCustomerNumberSales.length; i++) {
        this.total = this.total + this.arrhourlyCustomerNumberSales[i];
    }
}
//Object instance creation
var branchOne = new Branch("Seattle", 23, 65, 6.3);
var branchTwo = new Branch("Tokyo", 3, 24, 1.2);
var branchThree = new Branch("Dubai", 11, 28, 3.7);
var branchFour = new Branch("Paris", 20, 38, 2.3);
var branchFive = new Branch("Lima", 2, 16, 4.6);
creations();
//function calls :
function creations() {
    for (var z = 0; z < branchArray.length; z++) {
        branchArray[z].numberOfCustomers(branchArray[z].minCustomers, branchArray[z].maxCustomers);
        branchArray[z].caculateHourlySales();
        branchArray[z].caculateTotalSales();
    }
}

var grandparentElement = document.getElementById("body-tag");
    var parentElement = document.createElement("table");
grandparentElement.appendChild(parentElement);
createHourRow();
createTableData();
createTotalRow();


//Hours row (Header)
function createHourRow() {

    var headerRow = document.createElement("tr");
    parentElement.appendChild(headerRow);
    var firstbox = document.createElement("th");
    firstbox.textContent = "";
    headerRow.appendChild(firstbox);
    for (var x = 0; x < workingHours.length; x++) {
        var box = [];
        box[x] = document.createElement("th");
        box[x].textContent = workingHours[x];
        headerRow.appendChild(box[x])

    }
    ;
}
//Table data, sales stats
function createTableData() {
    var branchRows = [];
    var totalArray = [];
    for (var x = 0; x < branchArray.length; x++) {
        branchRows[x] = document.createElement("tr");
        branchRows[x].textContent = branchArray[x].branchLocation
        parentElement.appendChild(branchRows[x]);
        for (var i = 0; i < 14; i++) {
            var rowBox = [];
            rowBox[i] = document.createElement("td");
            rowBox[i].textContent = branchArray[x].arrhourlyCustomerNumberSales[i];
            branchRows[x].appendChild(rowBox[i]);

        }
        totalArray[x] = document.createElement("td");
        totalArray[x].textContent = branchArray[x].total;
        branchRows[x].appendChild(totalArray[x]);
    }
}
//total row (footer)
function createTotalRow() {
    var hourlyTotalBranches = [];
    var totalBox = [];
    var hourlyTotalRow = document.createElement("tr");
    hourlyTotalRow.textContent = "totals";
    var finalTotal = 0;
    parentElement.appendChild(hourlyTotalRow);
    for (var i = 0; i < 14; i++) {

        var rTotal = 0;
        for (var y = 0; y < branchArray.length; y++) {
            rTotal += branchArray[y].arrhourlyCustomerNumberSales[i]
        }
        finalTotal += rTotal;

        totalBox[i] = document.createElement('td');
        totalBox[i].textContent = rTotal;
        hourlyTotalRow.appendChild(totalBox[i])
    }
    var lastEntry = document.createElement("td");
    lastEntry.textContent = finalTotal;
    hourlyTotalRow.appendChild(lastEntry);
}

var newBranch = document.getElementById("branchCreation");
newBranch.addEventListener("submit", function (event) {
    event.preventDefault();
    var branchName = event.target.branch.value;
    var minValue = parseInt( event.target.mincustomers.value);
    var maxValue = parseInt(event.target.maxcustomers.value);
    var averageValue = parseFloat(event.target.averagesales.value);
    var newCreation= new Branch(branchName, minValue, maxValue, averageValue);

var trial =document.getElementsByTagName("tr");
trial[trial.length-1].remove();
newCreation.numberOfCustomers(newCreation.minCustomers, newCreation.maxCustomers);
newCreation.caculateHourlySales();
newCreation.caculateTotalSales();
var createdRow = " ";
var totalArray = 0;
    createdRow = document.createElement("tr");
    createdRow.textContent = newCreation.branchLocation
    parentElement.appendChild(createdRow);
    for (var i = 0; i < 14; i++) {
        var rowBox = [];
        rowBox[i] = document.createElement("td");
        rowBox[i].textContent = newCreation.arrhourlyCustomerNumberSales[i];
        createdRow.appendChild(rowBox[i]);
        

    }
    totalArray = document.createElement("td");
    totalArray.textContent = newCreation.total;
    createdRow.appendChild(totalArray);
    createTotalRow();
})
