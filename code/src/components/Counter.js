import React from 'react';
import { useSelector } from 'react-redux';

import { CounterContainer, CounterText } from './StyledComponents/CounterStyling'
export const Counter = () => {  
  const todos = useSelector(state => state.todos.items)
  const leftTodo = todos.filter(todo => todo.complete === false)

  return(
    <CounterContainer> 
      <CounterText> 
        You have {leftTodo.length} remaining tasks out of {todos.length} to do!
      </CounterText>
    </CounterContainer>
  );
};