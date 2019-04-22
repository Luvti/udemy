/*******************************************************
 *  Basic operators
 */

var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2019;

ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn > ageMark;
var markOlder = ageJohn < ageMark;
console.log(johnOlder);
console.log(markOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");

var x;
console.log(x);
