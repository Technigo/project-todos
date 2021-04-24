import React from 'react'

import TodoList from './TodoList'
import Header from './Header'
import AddTodo from './AddTodo'

const TodoContainer = () => {
  return (
    <section className="todo-container">
      <Header />
      <TodoList />
      <AddTodo />
    </section>
  )
}

export default TodoContainer
