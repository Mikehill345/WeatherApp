import React, { useEffect, useState } from 'react';
import { APIKEY } from '../utils/apicalls';
import axios from 'axios'

const CurrentTemp = () => {
    const [userLat, setUserLat] = useState(0)
    const [userLong, setUserLong] = useState(0)
    const [loading, setLoading] = useState(false)
    const [userWeather, setUserWeather] = useState([])




    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log('lat --- >', position.coords.latitude)
            console.log('long --- >', position.coords.longitude)
            setUserLat(position.coords.latitude);
            setUserLong(position.coords.longitude);
        });

        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${userLong}&lon=${userLat}&appid=${APIKEY}`)
            .then((res) => {
                setUserWeather(res.data)
                setLoading(true)
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const kelvinToF = (k) => {
        let sum = Math.round((k - 273.15) * 9 / 5 + 32)
        return sum
    }

    if (loading === false) {
        return (
            <div>
                <h1>Doing some Loading right meow</h1>
            </div>
        )
    } else {

        return (
            <div>
                <h1>the Temp in {userWeather.name} is currently {kelvinToF(userWeather.main.temp)}</h1>

            </div>
        )
    }
}

export default CurrentTemp
