import React from 'react'
import { useSelector } from 'react-redux'

const UncompletedTodosCount = () => {
  const todosComplete = useSelector(state => state.todos.items)
  const uncompletedTodos = todosComplete.filter(todo => todo.isComplete === false).length

  return (
    <div className="uncompleted-container">
      <h2>Uncompleted todos: {uncompletedTodos}</h2>
    </div>
  )
}

export default UncompletedTodosCount