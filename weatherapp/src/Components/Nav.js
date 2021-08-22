import {
    Box,
    Flex,
    Button,
    HStack,
    useColorModeValue as mode,
    VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { MobileNav } from './MobileNav'
import { useHistory } from 'react-router-dom'
const Nav = () => {
    const history = useHistory()
    return (
        <Box>
            <Box as="header" bg={mode('white', 'gray.800')} borderBottomWidth="1px">
                <Box
                    maxW="7xl"
                    mx="auto"
                    py="1"
                    px={{
                        base: '6',
                        md: '8',
                    }}
                >
                    <Flex as="nav" justify="space-between">
                        <HStack spacing="8">
                            <Box as="a" href="#" rel="home">
                                <VisuallyHidden>Envelope app</VisuallyHidden>
                            </Box>
                            <HStack
                                display={{
                                    base: 'none',
                                    lg: 'flex',
                                }}
                                spacing="8"
                            >
                                <Button onClick={() => history.push('/')}>Todays Weather</Button>
                                <Button onClick={() => history.push('/forecast')}>5 Day Forcast</Button>
                            </HStack>
                        </HStack>
                        <Flex align="center">
                            <HStack
                                spacing="8"
                                display={{
                                    base: 'none',
                                    md: 'flex',
                                }}
                            >
                            </HStack>
                            <Box ml="5">
                                <MobileNav />
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default Nav;