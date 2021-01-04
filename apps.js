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
//Definition of Constructor 
function Branch(location, min, max, averCookiesPerCustomer,) {
    this.branchLocation = location;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.averCookiesCustomer = averCookiesPerCustomer;
    this.arrCustomerNumber = [];
    this.total = 0;
    this.arrhourlyCustomerNumberSales = [];
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

//function calls :
branchOne.numberOfCustomers(branchOne.minCustomers, branchOne.maxCustomers);
branchOne.caculateHourlySales();
branchOne.caculateTotalSales();

branchTwo.numberOfCustomers(branchTwo.minCustomers, branchTwo.maxCustomers);
branchTwo.caculateHourlySales();
branchTwo.caculateTotalSales();

branchThree.numberOfCustomers(branchThree.minCustomers, branchThree.maxCustomers);
branchThree.caculateHourlySales();
branchThree.caculateTotalSales();

branchFour.numberOfCustomers(branchFour.minCustomers, branchFour.maxCustomers);
branchFour.caculateHourlySales();
branchFour.caculateTotalSales();

branchFive.numberOfCustomers(branchFive.minCustomers, branchFive.maxCustomers);
branchFive.caculateHourlySales();
branchFive.caculateTotalSales();

var grandparentElement = document.getElementById("body-tag");
var parentElement = document.createElement("table");
grandparentElement.appendChild(parentElement);
var headerRow = document.createElement("tr");
parentElement.appendChild(headerRow);
//Hours row (Header)
var firstbox = document.createElement("td");
firstbox.textContent = "";
headerRow.appendChild(firstbox);
for (var x = 0; x < workingHours.length; x++) {
    var box = [];
    box[x] = document.createElement("td");
    box[x].textContent = workingHours[x];
    headerRow.appendChild(box[x])

}
//Table data, sales stats
var branchArray = [branchOne, branchTwo, branchThree, branchFour, branchFive];
var branchRows = [];
var totalArray = [];
for (var x = 0; x < 5; x++) {
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
//total row (footer)
var hourlyTotalBranches = [];
var totalBox = [];
var hourlyTotalRow = document.createElement("tr");
hourlyTotalRow.textContent = "totals";
parentElement.appendChild(hourlyTotalRow);
for (var i = 0; i < 14; i++) {
    for (var x = 0; x < 14; x++) {
        hourlyTotalBranches[x] = branchOne.arrhourlyCustomerNumberSales[x] + branchThree.arrhourlyCustomerNumberSales[x] + branchOne.arrhourlyCustomerNumberSales[x] + branchFour.arrhourlyCustomerNumberSales[x] + branchFive.arrhourlyCustomerNumberSales[x]
    }
    totalBox[i] = document.createElement('td');
    totalBox[i].textContent = hourlyTotalBranches[i];
    hourlyTotalRow.appendChild(totalBox[i])

}
//total coloumn 
var finalTotal = 0;
for (i = 0; i < 14; i++) {
    finalTotal += hourlyTotalBranches[i];
}
var lastEntry = document.createElement("td");
lastEntry.textContent = finalTotal;
hourlyTotalRow.appendChild(lastEntry);
