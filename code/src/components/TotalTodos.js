import React from 'react'
import { useSelector } from 'react-redux'
import todos from '../reducers/todos'

const TotalTodos = () => {
 const todos = useSelector((state) => state.todos.filter((todo) => todo.isComplete === true))
  const completedTodos = tasks.filter(todo => todo.isComplete)

  return (
    <div>
      <p>Total tasks:{completedTodos.length}/{tasks.length} </p>
    </div>
  )
}


export default TotalTodos