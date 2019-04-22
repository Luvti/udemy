/*******************************************************
 *   Variable mutattions and type coercion
 */

var firstName = "John";
var age = 28;

//type coercion
console.log(firstName + " " + age);
var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + " years old " + job + ". Is he married? " + isMarried);

//variable mutattions
age = "twenty eight";
job = "driver";
alert(firstName + " is a " +  age + " years old " + job + ". Is he married? " + isMarried);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
