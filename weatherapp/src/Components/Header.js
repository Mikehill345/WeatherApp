import {
    Box,
    Button,
    Heading,
    Img,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { useHistory } from 'react-router-dom'
import Nav from './Nav'


const Header = () => {

    const history = useHistory()

    return (
        <Box as="section" bg={mode('gray.50', 'gray.800')}  pb="24">
            <Nav/>
            <Box
                maxW={{
                    base: 'xl',
                    md: '7xl',
                }}
                mx="auto"
                px={{
                    base: '6',
                    md: '8',
                }}
            >
                <Stack
                    direction={{
                        base: 'column',
                        lg: 'row',
                    }}
                    spacing={{
                        base: '3rem',
                        lg: '2rem',
                    }}
                    mt="8"
                    align={{
                        lg: 'center',
                    }}
                    justify="space-between"
                >
                    <Box
                        flex="1"
                        maxW={{
                            lg: '520px',
                        }}
                    >
                        <Text
                            size="xs"
                            textTransform="uppercase"
                            fontWeight="semibold"
                            color={mode('blue.600', 'blue.300')}
                            letterSpacing="wide"
                        >
                            The Best Weather Ever
                        </Text>
                        <Heading
                            as="h1"
                            size="3xl"
                            color={mode('blue.600', 'blue.300')}
                            mt="8"
                            fontWeight="extrabold"
                            letterSpacing="tight"
                        >
                            The Mike Hill Weather Channel
                        </Heading>
                        <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
                           Look at the great weather we might or might not have in the forseeable future or today!
                        </Text>
                        <Stack
                            direction={{
                                base: 'column',
                                md: 'row',
                            }}
                            spacing="4"
                            mt="8"
                        >
                            <Button size="lg" minW="210px" colorScheme="blue" height="14" px="8" onClick={() => history.push('/')}>
                                Todays Weather
                            </Button>
                            <Button
                                size="lg"
                                bg="white"
                                color="gray.900"
                                _hover={{
                                    bg: 'gray.50',
                                }}
                                height="14"
                                px="8"
                                shadow="base"
                                onClick={() => history.push('/forecast')}           
                            >
                                5 Day Forecast
                            </Button>
                        </Stack>
                    </Box>
                    <Box
                        pos="relative"
                        w={{
                            base: 'full',
                            lg: '560px',
                        }}
                        h={{
                            base: 'auto',
                            lg: '560px',
                        }}
                    >
                        <Img
                            w="full"
                            pos="relative"
                            zIndex="1"
                            h={{
                                lg: '100%',
                            }}
                            objectFit="cover"
                            src='https://ca-times.brightspotcdn.com/dims4/default/704506d/2147483647/strip/true/crop/640x360+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc7%2Fd2%2Fd7418b424cd636bdeb0da6cdc060%2Fla-xpm-photo-2013-oct-07-la-et-ct-will-ferrell-ron-burgundy-dodge-ads-20131007'
                            alt='Ron Burgundy'
                        />
                        <Box
                            pos="absolute"
                            w="100%"
                            h="100%"
                            top="-4"
                            left="-4"
                            bg={mode('gray.200', 'gray.700')}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}


export default Header