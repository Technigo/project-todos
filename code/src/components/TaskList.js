import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from 'components/Task'

export const TaskList = () => {
  const allTasks = useSelector((store) => (store.tasklist))

  return (
    //Tasks with a checkbox and text - Use map on tasks in state
    <div>
      {allTasks.map((task) => (
        <Task key={task.id} text={task.text} done={task.complete}/>
      ))}
    </div>
  )
}