import React, { useEffect, useState} from 'react'
import { TaskItem } from './TaskItem'
import { TaskInput} from './TaskInput'
// import { TaskSummary } from './TaskSummary'
import { useSelector } from 'react-redux'



export const TaskList = () => {
const list = useSelector((store) => store.todos.list)
  
  return (
    <section className="task-list">
      <TaskInput />
      {list.items.map((item, index) => {
       console.log(index)
       return <TaskItem item={item} itemIndex={index} />
        
})}
    </section>
  )
}