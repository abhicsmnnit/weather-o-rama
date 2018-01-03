const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Gill%20Colony,%20Saharanpur',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});