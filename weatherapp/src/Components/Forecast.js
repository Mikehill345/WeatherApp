import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { APIKEY } from '../utils/utils'
import ForecastCard from './ForecastCard'
import { SimpleGrid, Box } from "@chakra-ui/react"

const Forecast = () => {
    //state for the 5 day forecast getting users location
    const [userLat, setUserLat] = useState(0)
    const [userLong, setUserLong] = useState(0)
    const [loading, setLoading] = useState(true)
    const [userWeather, setUserWeather] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setUserLat(position.coords.latitude);
            setUserLong(position.coords.longitude);
        });

        axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${userLat}&lon=${userLong}&appid=${APIKEY}`)
            .then((res) => {
                setUserWeather(res.data)
                setLoading(false)
            }).catch((err) => {
                setError(err)
            })
    }, [userLat, userLong])

    // different ways to handle loading times and errors 
    if (loading === true) {
        return (
            <div>
                <h1>Doing some Loading right meow</h1>
                <img src='https://m.media-amazon.com/images/I/51FagH84DFL._AC_SY355_.jpg' alt='smudge the cat' />
            </div>
        )
    } else if (error.length > 0) {
        return (
            <div>
                <alert>Something went wrong please try again</alert>
                <img src='https://m.media-amazon.com/images/I/51FagH84DFL._AC_SY355_.jpg' alt='smudge the cat' />
            </div>
        )
    }
    else {

        return (
            <Box as="section">
                <Box
                    mx="auto"
                >
                    <Box textAlign="center">
                        <SimpleGrid m="4" columns={{ base: 1, md: 2, lg: 8 }} spacingX="6" spacingY="16">
                            {/* <h1>the Temp in {userWeather.name} is currently {kelvinToF(userWeather.main.temp)}°F</h1> */}
                            {userWeather.list.map((weather, i) => (
                                <Box m='2' px='4' py='6' key={i} data-testid='LeBox'>
                                    <ForecastCard key={i} weather={weather} />
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default Forecast
