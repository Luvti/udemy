/*******************************************************
 *  Truthy and Falsy Values and Equality Operators
 */

// falsy values: undefined, null, 0, '', NaN;
// truthy values: NOT falsy values
var height;
height = 0;

if (height || height === 0) {
  console.log("variable is defined");
} else {
  console.log("variable has NOT ben defined");
}
//Equality Operators
height = 23;
if (height == "23") {
  console.log("The == operator does type coercion");
}
