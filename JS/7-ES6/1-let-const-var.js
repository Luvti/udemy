// ES5 - standart

// supports only in modern browsers
// ES6 - ES2015
// ES7 - ES2016
// ES8 - ES2017

//let && const

//ES5:
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5);

//ES6:
const name6 = 'Jane Smith';
let age6 = 23;

// name6 = 'Jane Miller';
age6 = 24;
console.log(age6);

// ES5
function driverLicence5(passedTest) {
    if(passedTest) {
        console.log(firstName);     // вернет undefined
        var firstName = 'John';     // var доступен в рамка функции
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', birth in ' + yearOfBirth  + " is now officially allowed to drive a car." );

}
driverLicence5(true);
 // var не доступен за пределами функции
// console.log(firstName + ', birth in ' + yearOfBirth  + " is now officially allowed to drive a car." ); 


//ES6
function driverLicence6(passedTest) {
    //console.log(firstName);     // error - firstName is not defined

    let firstName;
    // const yearOfBirth;   // нельзя объявить и потом указать значение
    const yearOfBirth = 1990;
    if(passedTest) {
        // let firstName = 'John';     //block scope - недоступен за пределами if'а
        firstName = 'John';
        // yearOfBirth = 1990; // нельзя объявить и потом указать значение
    }
    console.log(firstName + ', birth in ' + yearOfBirth  + " is now officially allowed to drive a car." );

}
driverLicence6(true);

let i = 23;

for (let i = 0; i< 5; i++) {    // block scope - не меняет переменную с тем же названием за пределами 
    console.log(i);
}
console.log(i);

var x = 23;
for (var x = 0; x< 5; x++) {    // var = меняет переменную с тем же названием за пределами 
    console.log(x);
}
console.log(x);
