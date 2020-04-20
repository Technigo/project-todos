import React from 'react'
// import { TodoItem } from 'components/TodoItem'
// import { TodoInput } from 'components/TodoInput'
import { useSelector } from 'react-redux'

export const TodoSummary = () => {

  const list = useSelector(store => store.todos.list)

  const numDone = list.items.filter(item => item.done).length

  return (
    <section className='todo-summary'>
      <h2>
        {numDone}/{list.items.length} task finished!
      </h2>
    </section>
  )
}