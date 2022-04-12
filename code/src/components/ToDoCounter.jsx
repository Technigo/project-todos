import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";

export const ToDoCounter = () => {
    const { todos, visibilityFilter } = useSelector(state => state);
    const todosRemaining = getTodosByVisibilityFilter(todos, visibilityFilter);

    return (
      <Box my={5}>
          {todosRemaining.length === 0 ? <Text></Text> : <Text>You have {todosRemaining.length} to do's left!</Text>} 
      </Box>
    )
  } 

export default ToDoCounter
