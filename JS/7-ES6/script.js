//Classes with Subclasses

//ES5
function Person5(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calcAge = function() {
    return new Date().getFullYear() - this.yearOfBirth;
};

function Athlete5 (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function() {
    this.medals++;
}

var john5 = new Person5('John', 1990, 'teacher');
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calcAge();
johnAthlete5.wonMedal();
console.log(johnAthlete5);

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
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
    }
}

var john6 = new Person6('John', 1990, 'teacher');
var johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.calcAge();
johnAthlete6.wonMedal();

console.log(john5, john6);
console.log(johnAthlete5, johnAthlete6);

Person6.greeting();