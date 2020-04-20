import React from 'react'
import { useSelector } from 'react-redux'
import { CompleteList } from './CompleteList'

import './style/Listed.css'
import './style/EmptyState.css'

export const ListedItems = () => {
  const allTodos = useSelector((store) => store.todos.list)
  const totalList = useSelector((store) => store.todos.list.todos)

  // const completedTodos = totalList.filter(todo => (todo.complete === true))
  // const notDoneTodos = totalList.filter(todo => (todo.complete === false))


  if (totalList.length === 0) {
    return (
      <>
        <h1 className="emptyList">All Done!!</h1>
        <img className="emptyImg" alt="Happy beet"
        src='https://cdn.dribbble.com/users/26684/screenshots/11093212/media/cb70a269aebd17e9164304d06197a4e9.png' />
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
