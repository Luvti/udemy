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
})();

//UI CONTROLLER
var UIController = (function() {
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getValues: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,                 // will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };           
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
        // 1. Get field input data
        var input = UICtrl.getValues();

        // 2. Add the item to the  budget controller
        // 3. Add the item to the budget
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