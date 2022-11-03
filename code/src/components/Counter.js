import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const TodoCounter = () => {
  const remainingTodos = useSelector((store) => store.todos.items)
  console.log(remainingTodos)

  const filteredTodos = remainingTodos.filter((item) => item.isChecked === false)
  console.log(filteredTodos)

  return (
    <Counter>{filteredTodos.length} remaining todos</Counter>
  )
}

export default TodoCounter;

const Counter = styled.p`
  background-color: #377958;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  padding: 2px 20px;
  height: 100%;
  display: flex;
  align-items: center;
`