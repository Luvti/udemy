// Primitives vs objects

// primitives
var a = 23;
var b = a;

a = 46;
console.log(a, b);

//objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age, obj2.age);

// functions
var age = 27;
var obj = {
    name: 'Johnas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);

console.log(age);
console.log(obj.city);