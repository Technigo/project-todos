import React from 'react'

import TodoList from './TodoList'
import Header from './Header'
import AddTodoInput from './AddTodoInput'

const TodoContainer = () => {
  return (
    <section className="todo-container">
      <Header />
      <TodoList />
      <AddTodoInput />
    </section>
  )
}

export default TodoContainer
