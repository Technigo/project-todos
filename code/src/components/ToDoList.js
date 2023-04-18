import React from 'react';
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const todoList = useSelector((store) => store.todos.items)
  return (
    <section>
      <ul>
        {todoList.map((singleToDo) => {
          return <li key={singleToDo.id}>{singleToDo.name}</li>
        })}
      </ul>
    </section>
  )
}

export default ToDoList;