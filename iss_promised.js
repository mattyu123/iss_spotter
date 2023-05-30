const request = require('request-promise-native')

//Function to get the IP address of the user
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json')
};

//Get the longitude and latitude based on the IP address
const fetchCoordsByIP = function(body) {
  const data = JSON.parse(body).ip
  return request(`http://ipwho.is/${data}`)
}

//Get the latitude and longitude coordinates based on IP address
const fetchISSFlyOverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body)
  const flyover = `https://iss-flyover.dickherokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(flyover)
}

//Chain all our functions together
const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(body => {
      const data = JSON.parse(body)
      return data.response;
    })
}

module.exports = { nextISSTimesForMyLocation };