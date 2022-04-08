import React from 'react'
import { useSelector } from 'react-redux'

import { Todo } from './Todo'

export const TodosList = () => {
  const allTodos = useSelector((store) => store.todos.items)
  // console.log(allTodos)

  return (
    <div>
      {allTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
