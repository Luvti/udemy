// Module pattern

//BUDGET CONTROLLER
var budgetController = (function() {
    //structure
    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals:  {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1
    };

    var Expense = function(id, description, value) {
        this.id = id;
        this.value = value;
        this.description = description;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.value = value;
        this.description = description;
    };

    var calcTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    return {
        addItem: function(type, desc, val) {
            var newItem, ID;
            // Create new ID
            if(data.allItems[type].length>0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type
            if(type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else {
                newItem = new Income(ID, desc, val);
            }
            // Push it into data structure
            data.allItems[type].push(newItem);
           //data.totals[type] += value;

            // Return the new element
            return newItem;
        },
        calcBudget: function() {
            // calc total income andexpenses
            calcTotal('exp');
            calcTotal('inc');

            // calc the budget income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            if(data.totals.inc > 0 ) {
                // calc the percentage of income thet we spent
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        getBudget: function() {
            return {
                budget: data.budget,
                percentage: data.percentage,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
            };
        },
         testing: function (){
             console.log(data);
         }
    }
})();

//UI CONTROLLER
var UIController = (function() {
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list',
    };

    return {
        getValues: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,                 // will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };           
        },
        addListItem: function(obj, type) {
            var html, newHtml, element;

            // create HTML string with placeholder text
            if(type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // replace placeholder text with som actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },
        
        clearFields:  function() {
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMStrings.inputDescription +', ' + DOMStrings.inputValue);
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(current, index, array) {
                current.value = "";
            });
            fieldsArray[0].focus();
        },
        getDOMStrings: function() {
            return DOMStrings;
        }
    };
})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    function setUpEventListeners () {
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            //which для старых юраузеров - то же самое что keyCode
           if (event.keyCode === 13 || event.which === 13) {
               ctrlAddItem();
           }
        });
    }

    var updateBudget = function() {
      // 1. Calc the budget
      budgetCtrl.calcBudget();
      // 2. Return the budget
      var budget = budgetCtrl.getBudget();
      // 3. Display the budget on the UI
      console.log(budget);
    };

    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get field input data
        input = UICtrl.getValues();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the  budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the budget
            UICtrl.addListItem(newItem, input.type);

            // 4. clear te fields 
            UICtrl.clearFields();

            // 5. Calc and update budget
            updateBudget();
        }
    };

    return {
        init: function() {
            console.log('Application has started.');
            setUpEventListeners();
        }
    };
})(budgetController, UIController);


controller.init();