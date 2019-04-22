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
        }
    };

    var Expense = function(id, value, description) {
        this.id = id;
        this.value = value;
        this.description = description;
    };

    var Income = function(id, value, description) {
        this.id = id;
        this.value = value;
        this.description = description;
    };
    var exp = new Expense(1, 'Test', 100);
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
                value: document.querySelector(DOMStrings.inputValue).value
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


    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get field input data
        input = UICtrl.getValues();

        // 2. Add the item to the  budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the budget
        UICtrl.addListItem(newItem, input.type);
        
        // 4. Calc budget
        // 5. Display the budget on the UI
        console.log('Test');
    };
    return {
        init: function() {
            console.log('Application has started.');
            setUpEventListeners();
        }
    };
})(budgetController, UIController);


controller.init();