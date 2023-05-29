//fetch the API data from each endpoint
const request = require('request');
const ipURL = 'https://api.ipify.org?format=json';


const fetchMyIP = (callback) => {
  request(ipURL, (error, response, body) => {
    if (error) {
      return callback(error);
    }

    //check to see if there is an issue with the response code when we attempt to pull the data
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    //if there are no errors and the status code doesn't raise any alarms, we move forward with the rest of it
    const data = JSON.parse(body).ip;
    callback(null, data);
  });
};

//function that calls API which returns the coordinates of an IP address
const fetchCoordsByIP = (ip, callback = () => {}) => {
  const geoLoc = `http://ipwho.is/${ip}` //manually inputted the IP address to test
  
  request(geoLoc, (error, response, body) => {
    //parse the data and then store the long and lat coordinates in an object
    const data = JSON.parse(body)

    if(error) {
      callback(error, null);
      return; 
    }

    //Checking to see if a valid status code is being returned
    if (!data.success) {
      const msg = `Success status was ${data.sucess}. Server says ${data.message} when searching for IP address ${ip}`;
      callback(Error(msg), null);
      return;
    }
    const {latitude, longitude} = data

    callback(null,{latitude, longitude})
  })
}

module.exports = { fetchCoordsByIP };