/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items)
  return (
    <section>
      <ul>
        {todoList.map((singleTodo) => {
          return <li key={singleTodo.id}>{singleTodo.task}</li>
        })}
      </ul>
    </section>
  )
}