import React from 'react'

import { useSelector } from 'react-redux'


export const TaskSummery = () => {

  // Get list information for this task-list:
  const list = useSelector(store => store.tasks.list)

  // this variable contains the nr of items that are done:
  const numDone = list.items.filter(item => item.done).length




  return (
      <section className="todo-summery">
        <h2>
          {numDone}/{list.items.length} are done 💚 
        </h2>
      </section>
  )



}