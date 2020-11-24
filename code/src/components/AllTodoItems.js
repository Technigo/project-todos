import React from 'react';
import { useSelector } from 'react-redux';

const AllTodoItems = () => {
  const todoItems = useSelector((store) => store.todolist)
  return (
    <div className="todo-container">
      {todoItems.length > 0 ? (
      <> 
      {todoItems.map((todo) => (
        <div key={todo.id}>
          {todo.task}
        </div>
      ))}
      </>
      ) : (<p>You have no tasks left today</p>)}
    </div>
  );
}
export default AllTodoItems