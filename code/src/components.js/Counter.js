import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { BottomToDo } from './GlobalStyles';

export const Summary = styled.h5`
  font-family: 'Manrope', sans-serif;
  font-weight: 200;
  color:var(--primaryBlack);
  border: 1.3px solid var(--primaryBlack);
  border-radius: 20px 5px 20px 5px;
  padding: 10px 25px;
  font-size: 18px;
  text-align: center;
  display:flex;
  justify-content: center;

`

const Counter = () => {
  const todo = useSelector((store) => store.todos.items);
  const completedTodos = todo.filter((todos) => todos.isDone)

  return (
    <BottomToDo>
      <Summary>You have completed: {completedTodos.length} out of {todo.length}</Summary>
    </BottomToDo>
  )
}

export default Counter;