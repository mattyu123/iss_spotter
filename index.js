//runs our main function
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

//Function that returns an IP address
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

//Function that takes the IP address and returns the coordinates of the location
fetchCoordsByIP("99.235.52.32", (error, coordinates) => {
  if(error) {
    console.log("It didn't work", error)
  }
  console.log("It worked! Coordinates are:", coordinates);
})

