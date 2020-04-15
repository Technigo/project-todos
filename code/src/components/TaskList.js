import React from 'react'
import { useSelector } from 'react-redux'

export const TaskList = () => {
  const allTasks = useSelector((state)=>state.todoStore.todos)
  return (
    <section>
      <h1>Todo List</h1>
      {allTasks.map((task)=>{

      return(<p>{task.task}</p>)
      }
      )}
    
    </section>
  )
}