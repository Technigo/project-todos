import React from 'react'
import { useSelector } from 'react-redux'

export const AmountOf = () => {
  const todos = useSelector(state => state.todos.list.todos)
  const leftTodo = todos.filter(todo => todo.complete === false)

  return (
    <div>
      <p className={todos.length === 0 ? "noAmount" : "amountOf"}>
        {leftTodo.length}/{todos.length} left to do!
      </p>
    </div>
  )
}