/*******************************************************
 *  Arrays
 */
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

//Mutate array data
names[1] = "Ben";
console.log(names);
names[names.length] = "Mary";
console.log(names);

//Differrent Datatypes
var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue"); // добавляет последним элементом массива
john.unshift("Mr."); // добавляет вначало массива

john.pop(); // удаляет последний элемент
john.shift(); // удаляет первый элемент
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer" : "John IS a designer";
console.log(isDesigner);
