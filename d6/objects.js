//objects in JavaScript
const MovieInfo = {
  movieName: "Akhanda2",
  heroName: "Nandamuri Balakrishna",
  director: 2,
};
//how to get values from object
console.log(MovieInfo.movieName);
console.log(MovieInfo["director"]);
//to get all keys from object
// console.log(Object.keys(movieInfo));  its method or
for (let key in MovieInfo) {
  console.log(MovieInfo[key]);
}
//advanced object methods(es6+) Object predefined class
Object.keys(MovieInfo).forEach((key) => {
  console.log(key);
});
//to get only values from object
Object.values(MovieInfo).forEach((value) => {
  console.log(value);
});
//to get both keys and values from object:Object.entries
Object.entries(MovieInfo).forEach((entry) => {
  console.log(entry[0] + " " + entry[1]); //key
});
//for of loop works with iterables only not with objects
//for of loop with objects
for (let [info, infoValue] of Object.entries(MovieInfo)) {
  console.log(info + ":   " + infoValue);
}
//arr: forof obj:forin(recommended)
//i need to explore more methods on objects

//nested objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models); //ford models
console.log(myObj.cars[1].models[2]); //BMW X5
arr = [1, 2, 3];
//typeof arr
console.log(typeof arr); //object
//cart object
const Order = {
  products: [
    { pid: 1001, pname: "drone", price: 2000 },
    { pid: 1002, pname: "camera", price: 5000 },
  ],
  //shipping address
  shippingAddress: {
    street: "123 main st",
    city: "hyderabad",
    pin: 522213,
  },
  userinfo: {
    uId: 2001,
    uName: "Archana",
    email: "archanabora@gmail.com",
  },
};

//print the user of order
console.log(Order.userinfo.uName);
