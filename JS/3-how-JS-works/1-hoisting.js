///////////////////////////////////////
// Lecture: Hoisting
// functions
calcAge(1965);
function calcAge(year) {
    console.log(2019-year);
}
calcAge(1990);

// retirement(1956);
var retirement = function (year) {
    console.log(65 - (2019-year));
};
retirement(1990);

// variables
console.log(age);
var age = 23;
console.log(age);

var age = 42;

function foo() {
    console.log(age);
    console.log(age1);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);