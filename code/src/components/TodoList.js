import React from 'react'
import { useSelector } from 'react-redux'

import { Todo } from 'components/Todo'

export const TodoList = () => {
  const todos = useSelector((store) => store.todos.items)
  return (
    // should I write items and item instead of todos and todo here?
    // List that maps through the todos in the global state and renders todos from todo component??
    <ul>
      {todos.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </ul>
  )
}