import React from 'react';
import { useSelector } from 'react-redux';
import { Counter } from './styles/Header.styled';

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

