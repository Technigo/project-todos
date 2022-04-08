import React from 'react';
import { Container, Heading, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { VisibilityFilter } from './VisibilityFilter';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

const animationKeyframes = keyframes`
  0% { transform: scale(0);} 
  100% { transform: scale(1); }
`;

const animation = `${animationKeyframes} 1s ease-in-out`;

export const StartPage = () => {
    return (
        <Container maxW="container.lg">
            <Heading as={motion.div} animation={animation} my="10" padding="4" textAlign="center"
                     color="white" w='100%' h='100%' bgGradient='linear(blue.400, blue.500)' borderRadius={5}>
            EffektiApp
            </Heading>
            <VisibilityFilter />
                <AddTodo />
                    <TodoList/>
        </Container>
    )
}
