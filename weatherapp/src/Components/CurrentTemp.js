import React, { useEffect, useState } from 'react';
import { APIKEY, kelvinToF } from '../utils/utils';
import axios from 'axios'
import {
    Text,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/react"
import { modalState } from '../utils/Atom';
import { useRecoilState } from 'recoil'

const CurrentTemp = () => {
    // current state for modal and getting users location
    const [userLat, setUserLat] = useState(0)
    const [userLong, setUserLong] = useState(0)
    const [loading, setLoading] = useState(false)
    const [userWeather, setUserWeather] = useState([])
    const [error, setError] = useState('')
    const [permission, setPermission] = useRecoilState(modalState)
    const { isOpen, onOpen, onClose } = useDisclosure()


    
    useEffect(() => {
        let mounted = false
        onOpen()
        if (permission === true) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setUserLat(position.coords.latitude);
                setUserLong(position.coords.longitude);
            });
        }
        const weatherCall = async () => {
            try {
                const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLong}&appid=${APIKEY}`)
                setUserWeather(response)
                setLoading(false)
            } catch (e) {
                setError(e)
            }
        }
        weatherCall()
        return () => {
            mounted = true
        }
    }, [])

    // Modal for asking for permission for Location services
    if (permission === false) {
        return (
            <>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Allow Access to Location</ModalHeader>
                        <ModalCloseButton />
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Deny
                            </Button>
                            <Button data-testid='allowBtn' colorScheme="blue" mr={3} onClick={() => setPermission(true)}>Allow</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }
    else if (loading === false) {
        return (
            <div>
                <Text>Doing some Loading right meow</Text>
                <img src='https://m.media-amazon.com/images/I/51FagH84DFL._AC_SY355_.jpg' alt='smudge the cat' />
            </div>
        )
    } else if (error.length > 0) {
        return (
            <div>
                <Text>IT BORKED {error}</Text>
                <img src='https://m.media-amazon.com/images/I/51FagH84DFL._AC_SY355_.jpg' alt='smudge the cat' />
            </div>
        )
    }
    else {
        return (
            <div>
                <Center fontSize='30px'>GOOOOOOD MOOOOORRRNNNINNNGGG {userWeather.name} </Center>
                <Center fontSize='30px'>The temperature is currently {kelvinToF(userWeather.main.temp)}°F</Center>
                <Center fontSize='30px'>With a humidity level of {userWeather.main.humidity}% </Center>
                <Center fontSize='30px'>And it feels like it's {kelvinToF(userWeather.main.feels_like)}</Center>
                <Center fontSize='30px'>{userWeather.weather[0].description}</Center>

            </div>
        )
    }
}

export default CurrentTemp
