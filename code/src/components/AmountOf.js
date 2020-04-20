import React from 'react'
import { useSelector } from 'react-redux'

export const AmountOf = () => {
  const todos = useSelector(state => state.todos.list.todos)
  const leftTodo = todos.filter(todo => todo.complete === false)

  //If everything is done, give pep!
  if (leftTodo.length === 0) {
    return (
      <>
      <p className="amountOf">Keep it up!</p>
      <p className="amountOf pep">Nothing more to do right now.</p>
      </>
    )
  }
  //If list is empty, don't show counter
  return (
    <div>
      <p className={todos.length === 0 ? "noAmount" : "amountOf"}>
        {leftTodo.length}/{todos.length} left to do
      </p>
      <p className={todos.length === leftTodo.length ? "amountOf pep" : "noAmount"}>
        Let's get going!
      </p>
    </div>
  )
}