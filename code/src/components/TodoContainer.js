import React from 'react'
import TodoList from './TodoList'


import Header from './Header'

import AddTodo from './AddTodo'

const TodoContainer = () => {
  return (
    <div>
      <Header />
      <TodoList />
      <AddTodo />

    </div>
  )
}

export default TodoContainer