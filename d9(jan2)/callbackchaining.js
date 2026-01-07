// callback chain
let studentDetails = () => {
  console.log("stdInfo");
  setTimeout(() => {
    let rollNums = [1, 2, 3, 4];
    console.log(rollNums);
    setTimeout(
      (rollnum) => {
        let data = {
          sname: "Nandu",
          qualification: "BTech",
        };
        console.log(`student name  is ${data.sname} qualification is ${data.qualification}
                roll no is ${rollnum}`);
      },
      2000,
      rollNums[1]
    );
  }, 2000);
};
studentDetails();
// if we implement a logic with multiple callbacks there may be a callbackhell problem
//    |
//    |
//
//promises
