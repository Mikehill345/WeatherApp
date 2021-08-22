import React from 'react'
import { kelvinToF } from '../utils/utils'
import moment from 'moment'
import { Box, Text, useColorModeValue, Img, Flex } from "@chakra-ui/react"

const ForecastCard = ({ weather }) => {
    let iconimg = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    var dateString = moment.unix(weather.dt).format("MM/DD/YYYY, h:mm a");
    return (
        <Flex direction="column" align="center" textAlign="center">
            <Box borderWidth="8px" borderRadius="lg" px="6" h='25vh'>
                <Img w="20" h="20" objectFit="cover" src={iconimg} alt={weather.weather[0].description} />
                <Text fontWeight="bold">{dateString}</Text>
                <Text color={useColorModeValue('gray.500', 'whiteAlpha.700')}
                    fontWeight="medium" fontSize="sm" >
                    {kelvinToF(weather.main.temp)}°F</Text>
                <Text>{weather.weather[0].description}</Text>

            </Box>
        </Flex>
    )
}

export default ForecastCard
