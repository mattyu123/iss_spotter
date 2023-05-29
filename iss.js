//fetch the API data from each endpoint

const request = require('request');
const apiURL = 'https://api.ipify.org?format=json'

const fetchMyIP = (callback) => {
  request(apiURL, (error, response, body) => {
    if (error) {
      return callback(error)
    }

    //check to see if there is an issue with the response code when we attempt to pull the data
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`
      callback(null, Error(msg));
      return;
    }

    const data = JSON.parse(body)
    callback(null, data)
  })
}

module.exports = { fetchMyIP };