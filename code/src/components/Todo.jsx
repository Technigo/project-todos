import React from 'react';
import { Box, Checkbox, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { toggleTodo } from '../redux/actions';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);

  const handleCheked = () => dispatch(toggleTodo(todo.id));

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
      <Box mb={1} bgGradient="linear(blue.300, blue.400)" p={3} borderRadius={5}>
        <Checkbox onChange={handleCheked} colorScheme="white" isChecked={cheked}>
          <Text color="RGBA(255, 255, 255, 0.97)" fontSize='md' as={todo.completed && "del"}>{todo.content}</Text>
        </Checkbox>
      </Box>
  )
}