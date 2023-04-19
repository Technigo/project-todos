import React from 'react'
import { useSelector } from 'react-redux'

export const CompletedItems = () => {
  const todos = useSelector((state) => state.todos)
  const completedTodos = todos.filter((singleTodo) => singleTodo.isComplete);

  return (
    <section className="bucket-completed">
      <h2>You have completed {completedTodos.length}</h2>
    </section>
  )
}