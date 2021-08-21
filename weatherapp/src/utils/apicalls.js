import axios from 'axios'

export const APIKEY = 'df9d99f36141c9595b5b65b2d2f832a3'

export const currentWeather = (lat, long) => {
    axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`)
    .then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
}