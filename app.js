var setBudget = document.getElementById('set-budget');
var totalBudget = document.getElementById('total-budget');
var userBudget = document.getElementById('user-budget');
var expenseBox = document.getElementById('main-expense-box');
var expenseList = document.getElementById('exp-list');
var dueDate = document.getElementById('due-date');
var Catgory = document.getElementById('Catgory');
var Description = document.getElementById('Description');
var totalExpense = document.getElementById('total-Expense');
var balance = document.getElementById('balance')

var Expenses = []

function SetBudget() {
    if (userBudget.value === "") {
        alert("Type The Right Value")
    }
    else {
        var empty = totalBudget.innerText = '';
        var SetTotal = userBudget.value;
        var SetUserValue = totalBudget.innerText = SetTotal;
        var emptyInput = userBudget.value = ""
        balance.innerHTML = SetTotal
    }
}
function AddExpense() {
        if (Catgory.value === "" || Description.value === "" || dueDate.value === "") {
            alert("Please Fill the Inputs")
        }
        else {

            //making list structure
            var li = document.createElement('li')
            var divMain = document.createElement('div')
            var divC1 = document.createElement('div')
            var divC2 = document.createElement('div')
            var divC3 = document.createElement('div')
            var expName = document.createElement('h3')
            var expdate = document.createElement('h3')
            var expPrice = document.createElement('h3')
            var editbtn = document.createElement('button')
            var delbtn = document.createElement('button')
            //merging
            expenseList.appendChild(li)
            li.appendChild(divMain)
            divMain.appendChild(divC1)
            divMain.appendChild(divC2)
            divMain.appendChild(divC3)
            divC1.appendChild(expName)
            divC2.appendChild(expPrice)
            divC1.appendChild(expdate)
            divC3.appendChild(editbtn)
            divC3.appendChild(delbtn)
            // add classes
            li.setAttribute('class', 'expense-item')
            divMain.setAttribute('class', 'expense-cont')
            expName.setAttribute('class', 'exp-head')
            expName.setAttribute('id', 'exp-head')
            expdate.setAttribute('class', 'exp-date')
            expdate.setAttribute('id', 'exp-date')
            expPrice.setAttribute('class', 'exp-price')
            expPrice.setAttribute('id', 'exp-price')
            divC1.setAttribute('class', 'exp-detail')
            divC2.setAttribute('class', 'exp-detail')
            editbtn.setAttribute('class', 'fa fa-pencil-square-o')
            editbtn.setAttribute('id', 'exp-edit-btn')
            editbtn.setAttribute('onclick', 'editvalue(this)')
            delbtn.setAttribute('class', 'fa fa-trash')
            delbtn.setAttribute('id', 'exp-del-btn')
            delbtn.setAttribute('onclick', 'delvalue(this)')
            divC3.setAttribute('class', 'exp-detail')
            // adding Expense name 

            var name = Description.value
            expName.innerHTML = name
            Description.value = ""

            // adding Expense date
            var date = dueDate.value
            expdate.innerHTML = date
            dueDate.value = ""
            // adding price of expense
            var price = Catgory.value
            expPrice.innerHTML = price
            var price = Catgory.value;
            expPrice.innerHTML = price;
            var addExpense = Expenses.push(price);
            var totalExpenseValue = Expenses.reduce((total, expense) => total + Number(expense), 0);
            totalExpense.innerHTML = totalExpenseValue;
            //updating Expense
            Catgory.value = ""
            // manage Balance
            var SetBalance = totalBudget.innerHTML - totalExpenseValue
            balance.innerHTML = SetBalance
        }
}

function editvalue(e) {
    var li = e.parentNode.parentNode.parentNode;
    var editbtn = document.getElementById('exp-edit-btn')
    var expName = document.getElementById('exp-head')
    var expdate = document.getElementById('exp-date')
    var expPrice = document.getElementById('exp-price')
    // set values
    Description.value = expName.innerText
    Catgory.value = expPrice.innerText
    dueDate.value = expdate.innerText

    // update li
    expName.innerText = Description.value
    expPrice.innerText = Catgory.value
    expdate.innerText = dueDate.value
    //expense Set
    var expensePricelist = li.querySelector('.exp-price').innerHTML;
    for (let i = 0; i < Expenses.length; i++) {
        if (Expenses[i] === expensePricelist) {
            Expenses.splice(i, 1);
            break;
        }
    }
    var totalExpenseValue = Expenses.reduce((total, expense) => total + Number(expense), 0);
    totalExpense.innerHTML = totalExpenseValue
    // manage Balance
    var SetBalance = totalBudget.innerHTML - totalExpenseValue
    balance.innerHTML = SetBalance


    //Remove li
    var li = e.parentNode.parentNode.parentNode.remove()

    location.href = ('#main-expense')
}
function delvalue(e) {
    var li = e.parentNode.parentNode.parentNode;
    var expensePricelist = li.querySelector('.exp-price').innerHTML;
    for (let i = 0; i < Expenses.length; i++) {
        if (Expenses[i] === expensePricelist) {
            Expenses.splice(i, 1);
            break;
        }
    }
    var totalExpenseValue = Expenses.reduce((total, expense) => total + Number(expense), 0);
    totalExpense.innerHTML = totalExpenseValue
    // manage Balance
    var SetBalance = totalBudget.innerHTML - totalExpenseValue
    balance.innerHTML = SetBalance

    li.remove();

}

