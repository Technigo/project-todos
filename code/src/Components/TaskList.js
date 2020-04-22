import React from 'react'
import { TaskItem } from './TaskItem'
import { TaskInput} from './TaskInput'
import { useSelector } from 'react-redux'



export const TaskList = () => {
const list = useSelector((store) => store.todos.list)
  
  return (
    <section>
      <TaskInput />
      {list.items.map((item, index) => {
       return <TaskItem 
       key="taskNum"
       item={item} itemIndex={index} />
        
})}
    </section>
  )
}