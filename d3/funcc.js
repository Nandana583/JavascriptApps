// functions in js
// function without parameters
function showMessage() {
  console.log("Welcome to js  functions");
}
showMessage();

// function with parameters
function addNumbers(a, b) {
  console.log("sum is : " + (a + b));
}
addNumbers(10, 20);

// how to return value from function
function mulNumbers(a, b) {
  return a * b;
}
let result = mulNumbers(10, 20);
console.log("multiplication is : " + result);

// new function syntax for ES6
// arrow function

const arrowDemo = () => {
  console.log("this is arrow function");
};
arrowDemo();

// arrow function with parameters
const sumNumbers = (a, b) => {
  console.log("sum is : " + (a + b));
};
sumNumbers(30, 40);
