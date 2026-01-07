//this keyword demo
const productInfo = {
  pname: "realme",
  price: 30000,
  productdetails: function () {
    return this.pname + "    " + this.price;
  },
};

console.log(productInfo.productdetails());
