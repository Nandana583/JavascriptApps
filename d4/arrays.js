//arrays in javascript
//creating an array
// let fruits = ['apple', 'banana', 'cherry'];//literal syntax(recommended)
// console.log(fruits); // Output: ['apple', 'banana', 'cherry']
let pnames = ["realme", "samsung", "iphone", "oneplus"];
// console.log(pnames); // Output: ['realme','samsung','iphone','oneplus']

//  let prices = new Array(100, 200, 300, 400); //object syntax
// console.log(prices);
// //to access array elements or get value from array
// console.log(pnames[0]); // Output: realme
// console.log(pnames[2]); // Output: iphone
// //retrieving all values from array
// for of loop
// for (let pname of pnames) {
//   console.log(pname);
// }
//for each method(callback fn)
// let names = pnames.forEach((val) => {
//   console.log(val);
// });
//to add new element to array
// (push, unshift, splice)
// pnames.push("nokia"); //adds at the end
// pnames.unshift("motorola"); //adds at the beginning
// pnames.splice(2, 0, "infinix"); //adds at specific position(index 2)
// console.log(pnames);
//to remove elements from array
//(pop, shift, splice)
// pnames.pop(); //removes from the end
// console.log(pnames);
// pnames.shift(); //removes from the beginning
// console.log(pnames);
// pnames.splice(1, 1); //removes from specific position(index 1) removes 1 element
// console.log(pnames);
// console.log(pnames.slice(-2, -4)); //returns a portion of the array from index -2 to -4
// prices = [100, 200, 300, 400, 500, 600];
// prices.sort();
// prices.reverse();
// pnames[2] = "ipad";
// console.log(prices);
// console.log(pnames);
//to concat two arrays
// let pnames1 = ["mac"];
// console.log(pnames.concat(pnames1));
// //spread operator
// let brands = [...pnames, ...pnames1];
// console.log(brands);
//array advanced methods[es6]
//reduce
let prices = [100, 200, 300, 400, 500];
let sum = prices.reduce((tot, val) => {
  return tot + val;
});
// console.log(sum);
//map
let offerPrice = prices.map((val) => {
  return val - 400;
});
console.log(offerPrice);
//arr met,strings

//([logo name menu login,description  forbackimg-pexels
