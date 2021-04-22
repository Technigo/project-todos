import React from 'react'
import { useSelector } from 'react-redux'

export const TodosDone = () => {
  const list = useSelector(store => store.todos.items)

  const listDone = list.filter(item => item.isComplete).length 

  return (
    <section>
      <h3>Tasks done: {listDone}/{list.length}</h3>
    </section>
  )
}
