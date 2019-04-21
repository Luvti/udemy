///////////////////////////////////////
// Lecture: The this keyword
console.log(this);

calcAge(1990);
function calcAge(year) {
    console.log(2019-year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        // regular function is not in John scope
        function innerScope() {
            console.log(this);
        }
        innerScope();
    }
};
john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};
mike.calcAge = john.calcAge;
mike.calcAge();
