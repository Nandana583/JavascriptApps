// call method
const mveinfo = {
  mvedetails: function (rating, review) {
    return this.heroname + " " + this.vilianname + " " + rating + " " + review;
  },
};
const bahubali = {
  heroname: "Prabhas",
  vilianname: "Rana",
};
// console.log(mveinfo.mvedetails.call(bahubali, 4.5, "good movie"));
// by using apply method

console.log(mveinfo.mvedetails.apply(bahubali, [4.5, "good movie"]));
