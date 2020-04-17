import React from 'react'
import { useSelector } from 'react-redux'

export const TodoSummary = () => {
  const list = useSelector(store => store.todos.list)
  const tasksDone = list.items.filter(item => item.done).length

  return (
    <section>
      <h2>{tasksDone}/{list.items.length} complete</h2>
    </section>
  )
}