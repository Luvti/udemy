//Strings
let firstName = 'John';
let latstName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2019 - year;
}

// ES5
console.log('This is '+ firstName + ' ' + latstName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${latstName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

//методы для строк в ES6
const n = `${firstName} ${latstName}`;

//startsWith, endsWith - in ES5 только indexOf
console.log(n.startsWith('J'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));

console.log(`${firstName} `.repeat(5));