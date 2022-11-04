import React from 'react';
import { useSelector } from 'react-redux';

const TotalItems = () => {
  const totalTodos = useSelector((store) => store.todos.items);
  const completedTodos = totalTodos.filter((singleTodo) => singleTodo.isDone)
  return (
    <>
      <h2>Total items: {totalTodos.length}</h2>
      <h2>Completed tasks: {completedTodos.length}/{totalTodos.length}</h2>
    </>
  )
}

export default TotalItems;