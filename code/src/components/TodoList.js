import React from 'react';
import { AddTodo } from './AddTodo';
import { SingleTodo } from './SingleTodo';

export const TodoList = () => {
  return (
    <div className="todo-list">
      <AddTodo />
      <SingleTodo />
    </div>
  )
}
