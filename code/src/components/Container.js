import React from 'react'

import Header from './Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Container = () => {
  return (
    <div className="content-container">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  )
}
export default Container