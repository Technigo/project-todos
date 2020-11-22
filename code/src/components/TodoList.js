import React from 'react'
import { useSelector } from 'react-redux'

import { Todo } from 'components/Todo'

export const TodoList = () => {
  const todos = useSelector((store) => store.todos.items)
  return (
    // List that maps through the todos in the global state and renders todos from todo component??
    <ul>
      {todos.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </ul>
    // Here I should add a button to clear list (remove all todo's)
  )
}