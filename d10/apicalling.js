//json
//  [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//....        ..........
//  ]
// apicalling logic with asyncaawait
const gettodos = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

gettodos();
