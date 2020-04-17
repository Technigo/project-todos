import React from 'react'
import { useSelector } from 'react-redux'

import './Listed.css'

export const ListedItems = () => {
  const everyTodo = useSelector((store) => store.todos)

  return (
    <div className="postedContainer">
      {everyTodo.items.map((todo) => (
        <div key={todo.id}>
        <p>{todo.text}</p>
      </div>
      ))}
    </div>
  )
}
