import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Container = () => {
  return (
    <div className="content-container">
      <h1>I will become a heade one day</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}
export default Container