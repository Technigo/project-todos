import React from 'react'
import { useSelector } from 'react-redux'
import { CompleteList } from './CompleteList'

import './Listed.css'

export const ListedItems = () => {
  const allTodos = useSelector((store) => store.todos.todos)

  return (
    <div>
      {allTodos.length === 0 &&
      <>
        <h1 className="emptyList">Great job!</h1>
      </>}
      {allTodos.map((todo) => (
        <CompleteList key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
