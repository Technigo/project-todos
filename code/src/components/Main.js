import React from 'react'

import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

const Main = () => {

  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  )


}

export default Main