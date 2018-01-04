const yargs = require('yargs');

const geocode = require('./geocode');

const argv = yargs
                .options({
                    address: {
                        describe: 'Address to get weather details for',
                        demandOption: true,
                        alias: 'a',
                        string: true
                    }
                })
                .help()
                .argv;

geocode.geocodeAddress(argv.address, (error, results) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});