import React from 'react'
import { useSelector } from 'react-redux'

export const TodoSummary = () => {
  const list = useSelector(store => store.todoStore.list)

  return (
    <section className='todo-summary'>
      <h2>
        0/{list.items.lenght} todos done
      </h2>
    </section>
  )

}
