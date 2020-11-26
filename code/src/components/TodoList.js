import React from 'react'
import { useSelector } from 'react-redux'

import { todos } from '../reducers/todos'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  
  const allTodos = useSelector(store => store.todos);
  
  return (
    <>
      {allTodos.map((todo) => (
        <TodoItem key={todos.id} {...todo} />
      ))}
    </>
  )
}
