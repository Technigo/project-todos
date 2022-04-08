import React from 'react';
import { Container, Heading } from '@chakra-ui/react';

import { VisibilityFilter } from './VisibilityFilter';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

export const StartPage = () => {
    return (
        <Container maxW="container.lg">
            <Heading my="10" padding="4" textAlign="center"
                     color="white" w='100%' h='100%' bgGradient='linear(blue.400, blue.500)' borderRadius={5}>
            EffektiApp
            </Heading>
            <VisibilityFilter />
                <AddTodo />
                    <TodoList/>
        </Container>
    )
}
