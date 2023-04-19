import React from 'react'
import { useSelector } from 'react-redux'

export const TodoCounter = () => {
  const todos = useSelector((store) => store.todo.items);
  const completedTodos = todos.filter((singleTodo) => singleTodo.isComplete);

  return (
    <section className="bucket-completed">
      <h2>You have completed {completedTodos.length}</h2>
    </section>
  )
}