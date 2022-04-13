import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from "react-redux";

import { getTodosByVisibilityFilter } from "../redux/selector";

export const ToDoCounter = () => {
    const { todos, visibilityFilter } = useSelector(state => state);
    const todosRemaining = getTodosByVisibilityFilter(todos, visibilityFilter);
    
    return (
      <Box my={3}>
          {todosRemaining.length === 0 ? <Text></Text> 
          : todosRemaining.length === 1 ? <Text textAlign="center">You have {todosRemaining.length} to do left!</Text>
          : <Text textAlign="center">You have {todosRemaining.length} to dos left!</Text> }  
      </Box>
    )
  } 

export default ToDoCounter

