'use strict'

var branchOne = {
    branchLocation: "Seattle",
    minCustomers: 23,
    maxCustomers: 65,
    averCookiesCustomer: 6.3,
    arrCustomerNumber: [],
    total: 0,
    hourlySales: [],
    numberOfCustomers: function (min, max) {
        for (var i = 0; i < 14; i++) {
            branchOne.arrCustomerNumber[i] = Math.floor(Math.random() * (max - min) + min);
            // console.log(this.arrCustomerNumber[i]);
        }   

    },
    calculateSales: function () {

        for (var i = 0; i < this.arrCustomerNumber.length; i++) {
            branchOne.hourlySales[i] = Math.floor(branchOne.arrCustomerNumber[i] * this.averCookiesCustomer);
            // console.log(this.hourlySales);


        }
    },
    calculateTotal: function () {

        for (var i = 0; i < this.hourlySales.length; i++) {
            this.total = this.total + branchOne.hourlySales[i];
            // console.log(this.total);
        }
    }
};
branchOne.numberOfCustomers(branchOne.minCustomers,branchOne.maxCustomers);
branchOne.calculateSales();
branchOne.calculateTotal();
var branchTwo = {
    branchLocation: "Tokyo",
    minCustomers: 3,
    maxCustomers: 24,
    averCookiesCustomer: 1.2,
    arrCustomerNumber: [],
    hourlySales: [],
    total: 0,
    numberOfCustomers: function (min, max) {
        for (var i = 0; i < 14; i++) {
            branchTwo.arrCustomerNumber[i] = Math.floor(Math.random() * (max - min) + min);
        }

    },
    calculateSales: function () {

        for (var i = 0; i < this.arrCustomerNumber.length; i++) {
            branchTwo.hourlySales[i] = Math.floor(branchTwo.arrCustomerNumber[i] * this.averCookiesCustomer);
            // console.log(this.hourlySales);


        }
    },
    calculateTotal: function () {

        for (var i = 0; i < this.hourlySales.length; i++) {
            this.total = this.total + branchTwo.hourlySales[i];
            // console.log(this.total);
        }
    }
};
branchTwo.numberOfCustomers(branchTwo.minCustomers,branchTwo.maxCustomers);
branchTwo.calculateSales();
branchTwo.calculateTotal();
var branchThree = {
    branchLocation: "Dubai",
    minCustomers: 11,
    maxCustomers: 28,
    averCookiesCustomer: 3.7,
    arrCustomerNumber: [],
    hourlySales: [],
    total: 0,
    numberOfCustomers: function (min, max) {
        for (var i = 0; i < 14; i++) {
            branchThree.arrCustomerNumber[i] = Math.floor(Math.random() * (max - min) + min);
        }

    },
    calculateSales: function () {

        for (var i = 0; i < this.arrCustomerNumber.length; i++) {
            branchThree.hourlySales[i] = Math.floor(branchThree.arrCustomerNumber[i] * this.averCookiesCustomer);
            // console.log(this.hourlySales);


        }
    },
    calculateTotal: function () {

        for (var i = 0; i < this.hourlySales.length; i++) {
            this.total = this.total + branchThree.hourlySales[i];
            // console.log(this.total);
        }
    }

};
branchThree.numberOfCustomers(branchThree.minCustomers,branchThree.maxCustomers);
branchThree.calculateSales();
branchThree.calculateTotal();
var branchFour = {
    branchLocation: "Paris",
    minCustomers: 20,
    maxCustomers: 38,
    averCookiesCustomer: 2.3,
    arrCustomerNumber: [],
    hourlySales: [],
    total: 0,
    numberOfCustomers: function (min, max) {
        for (var i = 0; i < 14; i++) {
            branchFour.arrCustomerNumber[i] = Math.floor(Math.random() * (max - min) + min);
        }

    },
    calculateSales: function () {

        for (var i = 0; i < this.arrCustomerNumber.length; i++) {
            branchFour.hourlySales[i] = Math.floor(branchFour.arrCustomerNumber[i] * this.averCookiesCustomer);
            // console.log(this.hourlySales);


        }
    },
    calculateTotal: function () {

        for (var i = 0; i < this.hourlySales.length; i++) {
            this.total = this.total + branchFour.hourlySales[i];
            // console.log(this.total);
        }
    }
};
branchFour.numberOfCustomers(branchFour.minCustomers,branchFour.maxCustomers);
branchFour.calculateSales();
branchFour.calculateTotal();
var branchFive = {
    branchLocation: "Lima",
    minCustomers: 2,
    maxCustomers: 16,
    averCookiesCustomer: 4.6,
    arrCustomerNumber: [],
    hourlySales: [],
    total: 0,
    numberOfCustomers: function (min, max) {
        for (var i = 0; i < 14; i++) {
            branchFive.arrCustomerNumber[i] = Math.floor(Math.random() * (max - min) + min);
            // console.log(this.arrCustomerNumber);
        }

    },
    calculateSales: function () {

        for (var i = 0; i < this.arrCustomerNumber.length; i++) {
            branchFive.hourlySales[i] = Math.floor(branchFive.arrCustomerNumber[i] * this.averCookiesCustomer);
            console.log(this.hourlySales);

        }
    },
    calculateTotal: function () {

        for (var i = 0; i < this.hourlySales.length; i++) {
            this.total = this.total + branchFive.hourlySales[i];
            // console.log(this.total);
        }
    }
};
branchFive.numberOfCustomers(branchFive.minCustomers,branchFive.maxCustomers);
branchFive.calculateSales();
branchFive.calculateTotal();
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
    'Total:'];
var branchArray = [branchOne, branchTwo, branchThree, branchFour, branchFive];
var parentElement = document.getElementById("body-tag");
var arrOfList = [];
var arrOfItem = [];

for (var x = 0; x < 5; x++) {
    arrOfList[x] = document.createElement("ul");    
    parentElement.appendChild(arrOfList[x]);
    arrOfList[x].textContent = branchArray[x].branchLocation;
    var arrOfItem = [];
    for (var index = 0; index < 15; index++) {
        arrOfItem[index] = document.createElement('li');
        arrOfItem[index].textContent = workingHours[index] + branchArray[x].hourlySales[index];
        arrOfList[x].appendChild(arrOfItem[index]);
        if (index== 14){
            arrOfItem[index].textContent= workingHours[index] + branchArray[x].total;
            arrOfList[x].appendChild(arrOfItem[index]);
        }
    }
    
};
