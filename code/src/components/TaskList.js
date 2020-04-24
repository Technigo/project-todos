import React, { Component } from 'react'
// import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Task } from './Task'

// import { tasks } from 'reducers/tasks'




export const TaskList = () => {
  const allTasks = useSelector(store => store.tasks.taskArray)

  const displayLenght = () => {
    return allTasks.filter((item) => item.complete).length
  }

  return (
    <div>
      {allTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
      Completed: {displayLenght()}/{allTasks.length}
    </div>
  )
}
