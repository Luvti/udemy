//Spread

function add4Ages (a,b,c,d) {
    return a+b+c+d;
}
var sum= add4Ages(18,30,12,21);
console.log(sum);

var ages = [18,30,12,21];
//ES5
var sum5 = add4Ages.apply(null, ages);
console.log(sum5);

//ES6
var sum6 = add4Ages(...ages);
console.log(sum6);



const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller ];

console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');