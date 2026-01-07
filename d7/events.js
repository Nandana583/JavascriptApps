//event logic

function buttonresult() {
  alert("hi");
}
let buttonvalue = document.getElementById("demo");
buttonvalue.addEventListener("click", buttonresult);
const btnres1 = () => {
  alert("hello");
};
let btnval1 = document.getElementById("demo1");
btnval1.addEventListener("click", btnres1);
//dynamic logic
let infovalue = document.getElementById("info");
const mouseoverresult = () => {
  infovalue.style.color = "blue";
};
//mouseout
const mouseout = () => {
  infovalue.style.color = "";
};
infovalue.addEventListener("mouseover", mouseoverresult);
infovalue.addEventListener("mouseno", mouseout);
//on input llogic
let inputval = document.getElementById("fName");
let paraval = document.getElementById("sample");
const oninputResult = () => {
  let inputinfo = inputval.value;
  paraval.textContent = inputinfo;
};
inputval.addEventListener("input", oninputResult);
