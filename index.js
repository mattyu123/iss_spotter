//runs our main function
const { nextISSTimesForMyLocation } = require('./iss');

// //Function that returns an IP address
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// //Function that takes the IP address and returns the coordinates of the location
// fetchCoordsByIP("99.235.52.32", (error, coordinates) => {
//   if(error) {
//     console.log("It didn't work", error)
//   }
//   console.log("It worked! Coordinates are:", coordinates);
// })

// fetchISSFlyOverTimes({ latitude: '43.7315479', longitude: '-79.7624177' }, (error, data) => {
//   if(error) {
//     console.log("It didn't work", error)
//     return
//   } 
//   console.log("It worked! The flyover times are", data)
// })

//function that chains together all of our previous functions
nextISSTimesForMyLocation ((error, passTimes) => {
  if(error) {
    return console.log("It didn't work!", error);
  }
  console.log(passTimes)
});