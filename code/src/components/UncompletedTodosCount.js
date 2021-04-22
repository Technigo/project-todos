import React from 'react'
import { useSelector } from 'react-redux'

const UncompletedTodosCount = () => {
  const todosComplete = useSelector(state => state.todos.items)
  const uncompletedTodos = todosComplete.filter(todo => todo.isComplete === false).length

  return (
    <h2>{uncompletedTodos}</h2>
  )
}

export default UncompletedTodosCount