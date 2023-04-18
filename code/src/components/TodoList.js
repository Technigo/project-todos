import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todoList = useSelector((store) => store.tasks.items);
  return (
    <div className="List">
      <ul>
        {todoList.map((singleTodo) => {
          return <ul key={singleTodo.id}>{singleTodo.content}</ul>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
