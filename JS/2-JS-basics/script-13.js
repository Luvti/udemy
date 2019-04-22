/*******************************************************
 *  Objects and Methods
 */

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    john.age = 2019 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
