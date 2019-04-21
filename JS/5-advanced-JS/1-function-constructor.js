/*
    - Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript;
    - The prototype property of an object is where we put methods and properties that we want other objects to inherit;
    - The Constructor’s prototype property is NOT the prototype of the Constructor itself, it’s the prototype of ALL instances that are created through it;
    - When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object’s prototype. This con&nues un&l the method is found: prototype chain.
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// function constructor (всегда называются с заглавной)
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    /*
        this.calcAge = function() {
            console.log(2019-this.yearOfBirth);
        };
    */
};
Person.prototype.calcAge = function() {
    console.log(2019-this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';

//instantiation
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName, jane.lastName, mark.lastName);

// для сравнения 2 прототипов
console.log(john.__proto__ === Person.prototype);

john.hasOwnProperty('job');
john.hasOwnProperty('lastName');

john instanceof Person;

var x = [2, 4, 6];
console.info(x);
