/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Summary = () => {
  const todos = useSelector((state) => state.todos.todosList)
  const stillTodos = todos.filter((todo) => todo.done)

  return (
    <div className="summary">
      <h4> Done: {stillTodos.length} / {todos.length}</h4>
    </div>
  )
}
