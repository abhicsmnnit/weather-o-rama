const argvProcessor = require('./argv-processor');
const geocode = require('./geocode');
const weather = require('./weather');

const address = argvProcessor.argv.address;

geocode.geocodeAddress(address, (error, geocodeDetails) => {
    if (error) {
        console.log(error);
    }
    else {
        weather.getWeather(geocodeDetails.latitude, geocodeDetails.longitude, (error, weatherDetails) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(`It is ${weatherDetails.temperature} F in ${geocodeDetails.address}.`);
                if (weatherDetails.temperature !== weatherDetails.apparentTemperature) {
                    console.log(`But it feels like ${weatherDetails.apparentTemperature} F.`);
                }
            }
        });
    }
});