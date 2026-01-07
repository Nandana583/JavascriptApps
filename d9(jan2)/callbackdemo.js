//callbackfn(fn inside fn) with synchronous execution
console.log("HI");
let prices = [20000, 30000, 50000, 40000];
let newPrices = prices.filter((val) => {
  return val > 20000;
});
console.log(newPrices);
console.log("hi");
//concurrency in java))
//js is single-threaded p.language in default))
