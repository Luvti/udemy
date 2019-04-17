/*******************************************************
*   Variables and datatypes
*/

/*
    console.log('Hey Cruel World!!!');

    var firstName = 'John';
    console.log(firstName);


    var lastName = 'Smith';
    var age = 28;               //Number    floating point numbers, for decimal and integers
    var fullAge = true;         
    console.log(fullAge);

    var job;         
    console.log(job);

    job='Teacher';
    console.log(job);
*/

//Naming rules
/*
    var 3years = 3;
    var john/mark = 'John ang Mark';

    var function = 23;
    var delete = 23;
    var if = 23;
*/

/*******************************************************
*   Variable mutattions and type coercion
*/

/*
    var firstName = 'John';
    var age = 28;

    //type coercion
    console.log(firstName + ' ' + age);
    var job, isMarried;
    job = 'teacher';
    isMarried = false;

    console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

    //variable mutattions
    age = 'twenty eight';
    job = 'driver';
    alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

    var lastName = prompt('What is his last name?');
    console.log(firstName + ' ' + lastName);
*/


/*******************************************************
*  Basic operators
*/

/*
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
    console.log(typeof 'Mark is older than John');

    var x;
    console.log(x);
 */

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
var ageJohn =  now - yearJohn;
var ageMark =  35;
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
x ++;
console.log(x);

x = x - 1;
x --;
console.log(x);