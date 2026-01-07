//multiline string(backtick-->`)
let info = `Welcome to IT
Welcome to vignan
Welcome to MERN stack`;
console.log(info);
//string interpolation
let firstName = "Nandana Jyothi";
let lastName = "Kancheti";
// console.log(`${firstName}`)
//array destructuring
let pnames = ["realme", "lg", "vivo"];
let [brand1, brand2, brand3] = pnames;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructing
const movieInfo = {
  movieName: "Bahubali",
  heroName: "Prabhas",
  director: "Rajamouli",
};
let { movieName, heroName, director } = movieInfo;
console.log(heroName);
console.log(heroName);
console.log(director);
