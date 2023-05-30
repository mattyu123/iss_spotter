//runs our main function
const { nextISSTimesForMyLocation } = require('./iss');

//function that chains together all of our previous functions
nextISSTimesForMyLocation ((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log(passTimes)
});