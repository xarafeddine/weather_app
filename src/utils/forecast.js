const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=279edfc886205ce7d86665d47ff86717&query=' + latitude +','+ longitude  

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. it feels like ' + body.current.feelslike + ' degress out' + ', the pressure is ' + body.current.pressure + ', the humidity is ' + body.current.humidity +'%.')
        }
    })
}

module.exports = forecast