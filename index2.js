const { nextISSTimesForMyLocation } = require('./iss_promised.js');

//Call the function that chains all our other functions together and print out the result
nextISSTimesForMyLocation()
  .then((bofa) => {
    console.log(bofa)
  })
  .catch(error => {
    console.log("YOU MADE AN ERROR DUMB BITCH:", error.message);
  });