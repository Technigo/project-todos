import React from 'react'
import { useSelector } from 'react-redux'
import { CompleteList } from './CompleteList'

import './Listed.css'

export const ListedItems = () => {
  const allTodos = useSelector((store) => store.todos.list)
  const totalList = useSelector((store) => store.todos.list.todos)

  if (totalList.length === 0) {
    return (
      <>
        <h1 className="emptyList">All Done!!</h1>
      </>
    )
  }

  return (
    <section>
      {allTodos.todos.map((todo, index) => (
        <CompleteList todo={todo} todoIndex={index} />
      ))}
    </section>
  )
}
