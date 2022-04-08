import React from 'react';
import { Button, Container, Heading, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

import { Start } from './illustrations/Start';

const animationKeyframes = keyframes`
  0% { transform: scale(0);} 
  100% { transform: scale(1); }
`;

const animation = `${animationKeyframes} 1s ease-in-out`;

const IntroPage = () => {
    return (
        <Container centerContent maxW="container.lg">
            <Heading 
                my="10" 
                padding="4" 
                textAlign="center"
                color="blue.400" 
                borderColor='blue.400' 
                w='60%'  
                h='100%' 
                border='2px' 
                borderRadius={5}
            >EffektiApp
            </Heading>
            <Start />
            <Link to="/app">
                <Button 
                    as={motion.div} 
                    animation={animation} 
                    width='200px'  
                    color="blue.400" 
                    borderColor='blue.400' 
                    variant='outline'
                    _hover={{
                        background: "blue.400",
                        color: "white",
                      }}
                >Enter
                </Button>
            </Link>
        </Container>
    )
}

export default IntroPage
