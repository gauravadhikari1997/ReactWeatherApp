var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b269381a9075435709d713c68775bee3&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var reqestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(reqestUrl).then(res => {
            if (res.data.cod === 200){
                return JSON.stringify(res.data.main.temp);//.data.main.temp;
            }
            throw res.data.cod;
        }, res => {
            throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
        });
  }
}
