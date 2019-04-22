/*******************************************************
 *  Operator precedence
 */

var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// 2 + 4 + 5
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//More operators
x = x * 2;
x *= 2;
console.log(x);

x = x + 10;
x += 10;
console.log(x);

x = x + 1;
x++;
console.log(x);

x = x - 1;
x--;
console.log(x);
