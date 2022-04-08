import React from 'react';
import { Button, Container, Heading, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoMdArrowForward } from 'react-icons/io'
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
            <Heading as={motion.div} animation={animation} my="6" padding="4" textAlign="center"
                     color="white" w='100%' h='100%' bgGradient='linear(blue.400, blue.500)' borderRadius={5}>
                Welcome to EffektiApp
            </Heading>
            <Start />
            <Link to="/app">
                <Button rightIcon={<IoMdArrowForward />} size='lg' variant='outline' colorScheme='blue'>Enter</Button>
            </Link>
        </Container>
    )
}

export default IntroPage
