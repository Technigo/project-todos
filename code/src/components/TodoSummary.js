import React from 'react'
import { useSelector } from 'react-redux'

export const TodoSummary = () => {
  const items = useSelector(store => store.todos.items)
  const tasksDone = items.filter(item => item.done).length

  return (
    <section>
      <h2>{tasksDone}/{items.length} complete</h2>
    </section>
  )
}