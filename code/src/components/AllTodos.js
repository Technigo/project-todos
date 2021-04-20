import React from 'react';
import { useSelector } from 'react-redux';

export const AllTodos = () => {
  const allTodos = useSelector((store) => store.tasks)
  const completedTodos = allTodos.filter((task) => task.complete)
  return (
    <div className="header">
      <h1>Todo's</h1>
      <h4>Completed: {completedTodos.length}/{allTodos.length}</h4>
    </div>
  )
}