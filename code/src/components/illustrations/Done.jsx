import React from 'react'
import { Box, Image, Center, keyframes } from "@chakra-ui/react"

import { motion } from 'framer-motion';


const animationKeyframes1 = keyframes`
  0% { transform: scale(0);} 
  100% { transform: scale(1); }
`;

const animation1 = `${animationKeyframes1} 1s ease-in-out`;

export const Done = () => {
    return (
        <Box as={motion.div} animation={animation1} textAlign="center" my="4">Nothing more to do! You have earned some you time! 
            <Center>
                <Image 
                    width={['100%', '80%', '60%', '40%', ]}          
                    src='./assets/done.jpg' 
                    alt='Done Illustration' 
                />
            </Center>
        </Box>
    )
}