//Arrow functions - this

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', function() {
            var self = this;    // для правки привязки this к текущему объект, а не к  window
            alert('This box number ' + self.position + ' and it is ' + self.color);  // this - относится к window - по этому будет undefined
        });
    }
};
box5.clickMe();

//ES6
var box66 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {  //shares
            alert('This box number ' + self.position + ' and it is ' + self.color);  // this - относится к window - по этому будет undefined
        });
    }
};
box66.clickMe();


var box6 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {  //shares lexical this keyword for window
            var self = this;    //для правки ошибки
            alert('This box number ' + self.position + ' and it is ' + self.color);  // this - относится к window - по этому будет undefined
        });
    }
};
box6.clickMe();


function Person(name) {
    this.name = name;
}
//ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friend with ' + el; //this - выбрасывает на уровень выше на window
    }.bind(this));
    console.log(arr);
};

var friends5 = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends5);


//ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friend with ${el}`);
    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);
