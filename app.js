const argvProcessor = require('./argv-processor');
const geocode = require('./geocode');

const argv = argvProcessor.argv;

geocode.geocodeAddress(argv.address, (error, results) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});