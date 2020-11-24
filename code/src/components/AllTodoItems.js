import React from 'react';
import { useSelector } from 'react-redux';

const AllTodoItems = () => {
  const todoItems = useSelector((store) => store.todolist)

  return (
    <div className="todo-container collection">
      {todoItems.map((todo) => (
        todo.task
      ))}
    </div>
  );
}
export default AllTodoItems