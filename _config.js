var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://gicheha:gicheha@cluster0.xuqdg.mongodb.net/darkroom/?retryWrites=true&w=majority',
    development: 'mongodb+srv://gicheha:gicheha@cluster0.xuqdg.mongodb.net/darkroom-dev/?retryWrites=true&w=majority',
    test: 'mongodb+srv://gicheha:gicheha@cluster0.xuqdg.mongodb.net/darkroom-test/?retryWrites=true&w=majority',
}

module.exports = config;
