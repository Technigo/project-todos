import React from 'react'
import { useSelector } from 'react-redux'
import { CompleteList } from './CompleteList'

import './Listed.css'

export const ListedItems = () => {
  const allTodos = useSelector((store) => store.todos.list)

  return (
    <section>
      {allTodos.length === 0 && 
      <>
        <h1 className="emptyList">All Done!!</h1>
      </>} 
      {allTodos.todos.map((todo, index) => (
        <CompleteList key={todo} todo={todo} todoIndex={index}/>
      ))}
    </section>
  )
}
