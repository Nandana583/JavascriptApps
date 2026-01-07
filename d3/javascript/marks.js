let marks = 90;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else {
  console.log("not eligible for grades");
}

// loops in js
// for loop

for (let i = 1; i <= 10; i++) {
  console.log("i value is:", +i);
}

// while loop
let j = 1;

while (j <= 10) {
  console.log("j value is:", +j);
  j++;
}

// do while loop

let k = 1;
do {
  console.log("k value is:", +k);
  k++;
} while (k <= 10);

// new loops in advanced js (ES6)
// for of loop
// for in loop
// these loops are used to work with iterables.(strings,arrays,objects)

let pnames = ["realmi", "samsung", "iphone", "oneplus"];
for (let pname of pnames) {
  console.log(pname);
}

let employeeInfo = {
  eid: 1001,
  ename: "ashu",
  esalary: 70000,
};
for (let key in employeeInfo) {
  console.log(employeeInfo[key]);
}

// if we need to access array use for of
// if we need to access object use for in
