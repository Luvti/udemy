/*******************************************************
 *  Functions
 */

function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirtement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}
yearsUntilRetirtement(1990, "John");
yearsUntilRetirtement(1948, "Mike");
yearsUntilRetirtement(1969, "Jane");
