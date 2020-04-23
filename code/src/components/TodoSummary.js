import React from 'react'
import { useSelector } from 'react-redux'
import { RemoveAll } from 'components/RemoveAll'

export const TodoSummary = () => {

  const list = useSelector(store => store.todos.list)

  const numDone = list.items.filter(item => item.done).length

  return (
    <section className='todo-summary'>
      <h2>
        {numDone} OUT OF {list.items.length} DONE
      </h2>
      <RemoveAll />
    </section>
  )
}