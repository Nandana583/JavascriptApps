//async await
const movieRating = () => {
  return new Promise((resolve, reject) => {
    let rating = 4.5;
    if (rating > 4) {
      resolve("Good Movie");
    } else {
      reject("Waste of your time");
    }
  });
};
//To call promises with async await
const movieResult = async () => {
  try {
    const result = await movieRating();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
movieResult();
