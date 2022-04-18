import React from 'react';
import { Box, Checkbox, Text, Button, Flex, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { toggleTodo, deleteTodo } from '../redux/actions';
import { Date } from './Date';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);

  // HANDLECHECK TO TOGGLE THE TOGGLE FUNCTION
  const handleCheked = () => {
    dispatch(toggleTodo(todo.id));
  }
  // HANDLECHECK TO TOGGLE THE DELETE FUNCTION
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  }

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
    <Flex m={1} direction="row">
      <Box w="100%"   
           mb={2} 
           bgGradient="linear(blue.300, blue.400)" 
           p={3} 
           borderRadius={5} 
           borderTopRightRadius={0}
          borderBottomRightRadius={0}>
        <Checkbox onChange={handleCheked} colorScheme="white" isChecked={cheked}>
          <Stack mx={2}>
              <Text color="RGBA(255, 255, 255, 0.97)" fontSize='md' as={todo.completed && "del"}>{todo.content}</Text>
              <Date /> 
          </Stack>
        </Checkbox>
      </Box>
      <Box mb={2} 
           bgGradient="linear(blue.300, blue.400)" 
           p={3} 
           borderRadius={5} 
           borderTopLeftRadius={0}
           borderBottomLeftRadius={0}>
          <Button border="2px" colorScheme='white' size='lg' onClick={handleDelete}>X</Button>
      </Box>
    </Flex>
  )
}