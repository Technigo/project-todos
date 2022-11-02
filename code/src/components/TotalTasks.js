import React from 'react';
import { useSelector } from 'react-redux';

const TotalTasks = () => {
  const toDos = useSelector((store) => store.toDos.items);
  const completedTodos = toDos.filter((singleTodo) => singleTodo.complete)

  return (
    <h3>You have completed {completedTodos.length}/{toDos.length} tasks.</h3>
  )
};

export default TotalTasks;