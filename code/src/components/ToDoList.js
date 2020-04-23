import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'
import { AddTask } from './AddTask'


export const ToDoList = () => {
  const list = useSelector(store => store.tasks.list)

  return (
    <div>
      <AddTask />
        {list.items.map((item, index) => (
          <Task key={index} item={item} itemIndex={index} />
      ))}     
    </div>
  )
}
