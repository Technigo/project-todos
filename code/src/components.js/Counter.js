import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
  const todo = useSelector((store) => store.todo.items);
  const completedTodos = todo.filter((todos) => todos.done);

  return (
    <section className="bottom-todo">
      <h5>You have completed {completedTodos.length}</h5>
    </section>
  )
}

export default Counter;