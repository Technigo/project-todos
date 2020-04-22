import React from 'react'
import { useSelector } from 'react-redux'
import { CompleteList } from './CompleteList'

import './style/Listed.css'
import './style/EmptyState.css'

export const ListedItems = () => {
  // const completedTodos = totalList.filter(todo => (todo.complete === true))
  // const notDoneTodos = totalList.filter(todo => (todo.complete === false))

  const allTodos = useSelector((store) => store.todos.list)
  const totalList = useSelector((store) => store.todos.list.todos)


  //Empty state, if list is cleared
  if (totalList.length === 0) {
    return (
      <>
        <h1 className="emptyList">All Done!!</h1>
        <img className="emptyImg" alt="Happy beet"
          src='https://cdn.dribbble.com/users/26684/screenshots/11093212/media/cb70a269aebd17e9164304d06197a4e9.png' />
      </>
    )
  }

  //Maps through each posted item
  return (
    <section>
      {allTodos.todos.map((todo, index) => (
        <CompleteList todo={todo} todoIndex={index} />
      ))}


      {/* {completedTodos.map((todo, index) => (
        <CompleteList todo={todo} todoIndex={index} />
      ))}

      {notDoneTodos.map((todo, index) => (
        <CompleteList todo={todo} todoIndex={index} />
      ))} */}
    </section>
  )
}
