import React from 'react'
import { useSelector } from 'react-redux'
// import { todos } from 'reducers/todos'

import './Listed.css'

export const ListedItems = () => {
  const everyTodo = useSelector((store) => store.todos)


  return (
    <div className="postedContainer">
      {everyTodo.todos.map((todo) => (
        <div className="eachItem" 
        key={todo.id}>
          <p className="todoText">{todo.text}</p>
          <p className="todoTime">{todo.time}</p>
        </div>
      ))}
    </div>
  )
}
