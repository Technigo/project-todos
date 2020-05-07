import React from 'react'
import { useSelector } from 'react-redux'

export const TodoSummery = () => {

  const list = useSelector(store => store.todos.list)

  const numDone = list.items.filter(item => item.done).length

  return (
    <section className='todo-summery'>
      <h4>{numDone}/{list.items.length} Done</h4>
    </section>)

}

