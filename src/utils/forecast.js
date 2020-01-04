const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8c5b17c35b8faa29ecc64bb8f0b5aaf2/' + encodeURI(latitude) + ',' + encodeURI(longitude)
    console.log(url);

    request({ url: url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather app', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast