//Classes

//ES5
function Person5(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calcAge = function() {
    return new Date().getFullYear() - this.yearOfBirth;
};
var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
    static greeting() {
        console.log('Hey there');
    }
}
var john6 = new Person6('John', 1990, 'teacher');

console.log(john5, john6);

Person6.greeting();