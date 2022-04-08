import React from 'react'
import { Box, Image, Center, Text } from "@chakra-ui/react"

export const Start = () => {
    return (
        <Box textAlign="center" my="2">
            <Text fontSize='2xl' textAlign='center'>
                Start planning your day!
            </Text>
            <Center>
                <Image             
                    width={['100%', '80%', '60%', '40%', ]}  
                    src='./assets/start.jpg' 
                    alt='Done Illustration' 
                    my="2"
                />
            </Center>
        </Box>
    )
}
