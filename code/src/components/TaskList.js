import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from 'components/Task'

export const TaskList = () => {
  const allTasks = useSelector((store) => (store.tasklist.tasks))
  // console.log(allTasks)
  

  return (
    <div>
      {allTasks.map((task) => (
        <Task key={task.id} id={task.id} text={task.text} complete={task.complete}/>
      ))}
    </div>
  )
}
