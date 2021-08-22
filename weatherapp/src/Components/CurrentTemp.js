import React, { useEffect, useState } from 'react';
import { APIKEY, kelvinToF } from '../utils/utils';
import axios from 'axios'
import { Text, Center } from "@chakra-ui/react"

const CurrentTemp = () => {
    const [userLat, setUserLat] = useState(0)
    const [userLong, setUserLong] = useState(0)
    const [loading, setLoading] = useState(false)
    const [userWeather, setUserWeather] = useState([])
    const [ error, setError ] = useState('')




    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setUserLat(position.coords.latitude);
            setUserLong(position.coords.longitude);
        });

        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLong}&appid=${APIKEY}`)
            .then((res) => {
                setUserWeather(res.data)
                setLoading(true)
                console.log(res.data)
            }).catch((err) => {
                setError(err)
            })
    }, [userLat, userLong])


    if (loading === false) {
        return (
            <div>
                <Text>Doing some Loading right meow</Text>
                <img src='https://m.media-amazon.com/images/I/51FagH84DFL._AC_SY355_.jpg' alt='smudge the cat'/>
            </div>
        )
    }else if(error.length > 0){
        return (
            <div>
                <alert>Something went wrong please try again</alert>
                <img src='https://m.media-amazon.com/images/I/51FagH84DFL._AC_SY355_.jpg' alt='smudge the cat'/>
            </div>
        )
    } 
    else {

        return (
            <div>
                <Center fontSize='30px'>GOOOOOOD MOOOOORRRNNNINNNGGG {userWeather.name} </Center>
                <Center fontSize='30px'>The temperature is currently {kelvinToF(userWeather.main.temp)}°F</Center>
                <Center fontSize='30px'>With a humitidy level of {userWeather.main.humidity}% </Center>
                <Center fontSize='30px'>And it feels like it's {kelvinToF(userWeather.main.feels_like)}</Center>
                <Center fontSize='30px'>{userWeather.weather[0].description}</Center>

            </div>
        )
    }
}

export default CurrentTemp
