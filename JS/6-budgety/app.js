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
        this.percentage = -1;
    };

    Expense.prototype.calcPersentage = function(totalIncome) {
        if(totalIncome > 0 ) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }

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
        deleteItem: function(type, ID) {
            var ids, index;
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });
            index = ids.indexOf(ID);
            if(index !== -1) {
                data.allItems[type].splice(index, 1);
            }
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
        calcPersentages: function() {
            data.allItems.exp.forEach(function(cur) {
                cur.calcPersentage(data.totals.inc);
            });
        },
        getPercentages: function() {
            var allPercentages = data.allItems.exp.map(
                function(cur) {
                    return cur.getPercentage();
                }
            );
            return allPercentages;
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
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
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
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // replace placeholder text with som actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },
        deleteListItem: function(selectorID) {
            var element = document.getElementById(selectorID);
            element.parentNode.removeChild(element);
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
        displayBudget: function(obj) {
            var percentageValue;
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            if(obj.percentage> 0) {
                percentageValue = obj.percentage + '%';
            } else {
                percentageValue = '---';
            }
                document.querySelector(DOMStrings.percentageLabel).textContent = percentageValue;
        },
        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel);
            var nodeListForEach = function(list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };
            nodeListForEach(fields, function(current, index) {
                var perc = percentages[index];
                if (perc > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });

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

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    }

    var updateBudget = function() {
      // 1. Calc the budget
      budgetCtrl.calcBudget();
      // 2. Return the budget
      var budget = budgetCtrl.getBudget();
      // 3. Display the budget on the UI
      UICtrl.displayBudget(budget);
    };

    var updatePercentages = function () {
        // 1. Calc percentages
        budgetCtrl.calcPersentages();

        // 2. Read percentags from the budget controller
        var percentages = budgetCtrl.getPercentages();

        // 3. Update the UI with the new percntages
        UIController.displayPercentages(percentages);
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

            //6. Calc and update percentages
            updatePercentages();
        }
    };
    var ctrlDeleteItem = function(event) {
        var itemID,splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            //1. delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);

            //2. delete the item from the UI
            UICtrl.deleteListItem(itemID);

            //3. Update and show the new budget
            updateBudget();

            //4. Calc and update percentages
            updatePercentages();
        }
    };
    return {
        init: function() {
            console.log('Application has started.');
            UICtrl.displayBudget({
                budget: 0,
                percentage: null,
                totalInc: 0,
                totalExp: 0,
            });
            setUpEventListeners();
        }
    };
})(budgetController, UIController);


controller.init();