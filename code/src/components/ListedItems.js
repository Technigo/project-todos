import React from 'react'
import { useSelector } from 'react-redux'
import { CompleteList } from './CompleteList'
// import { todos } from 'reducers/todos'



import './Listed.css'

export const ListedItems = () => {
  const allTodos = useSelector((store) => store.todos.todos)


  return (
    <div>
      {allTodos.map((todo) => (
        <CompleteList key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
