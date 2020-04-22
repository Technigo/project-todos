import React from 'react'


import { useSelector } from 'react-redux'

export const TaskSummary = () => {
   

   const list = useSelector(store => store.todos.list)

   const numDone = list.items.filter(item => item.done).length
  return(
    <div className="summary">
      <p>{numDone}/{list.items.length} completeted </p>
    </div>
  )
}