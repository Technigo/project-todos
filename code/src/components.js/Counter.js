import React from 'react'
import { useSelector } from 'react-redux'
import { BottomToDo, HCounter } from './GlobalStyles';

const Counter = () => {
  const todo = useSelector((store) => store.todos.items);
  const completedTodos = todo.filter((todos) => todos.isDone)

  return (
    <BottomToDo>
      <HCounter>You have completed: {completedTodos.length} out of {todo.length}</HCounter>
    </BottomToDo>
  )
}

export default Counter;