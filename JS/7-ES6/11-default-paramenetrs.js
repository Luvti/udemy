//default parameters

//ES5
function SmithPerson5(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith': lastName = lastName;
    nationality === undefined ? nationality = 'american': nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john5 = new SmithPerson5('John', 1990);
var emily5 = new SmithPerson5('Emily', 1993, 'Diaz', 'spanish');
console.log(john5, emily5);


//ES6
function SmithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var john6 = new SmithPerson6('John', 1990);
var emily6 = new SmithPerson6('Emily', 1993, 'Diaz', 'spanish');


console.log(john6, emily6);