import React from 'react'
import { useSelector } from 'react-redux'

export const TodoSummary = () => {
  
  //the selector will be listning for changes and will update summary when items are added or checked
  const list = useSelector(store => store.todoStore.list)
  
  const numDone = list.items.filter(item => item.done).length
  
  return (
    <section className='todo-summary'>
      <h2>
        {numDone}/{list.items.length} todos done
      </h2>
    </section>
  )
}
