import React from 'react'
import { useSelector } from 'react-redux'
import { StyleP } from './Header';

export const TodoCounter = () => {
  const todos = useSelector((store) => store.todo.items);
  const completedTodos = todos.filter((todo) => todo.done);

  return (
    <section className="bucket-completed">
      <StyleP>You have completed {completedTodos.length}</StyleP>
    </section>
  )
}