const { nextISSTimesForMyLocation } = require('./iss_promised.js');

nextISSTimesForMyLocation()
  .then((bofa) => {
    console.log(bofa)
  })