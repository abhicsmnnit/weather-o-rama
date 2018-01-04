var request = require('request');

const getWeather = (latitude, longitude, callback) => {
    request({

        url: `https://api.darksky.net/forecast/97debb2c73ca9358cce13a0774b4e6bd/${latitude},${longitude}`,
        json: true

    }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
            const result = {
                temperature: body.currently.temperature, 
                apparentTemperature: body.currently.apparentTemperature
            };
            callback(undefined, result); 
        } else {
            callback('Unable to fetch weather.');
        }

    });
};

module.exports.getWeather = getWeather;