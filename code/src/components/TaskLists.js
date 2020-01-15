import React from 'react'
import { useSelector } from 'react-redux'

import { TaskList } from './TaskList'
import { AddNewTask } from "./AddNewTask"

export const TaskLists = () => {
  // TODO - fetch all tasks from the store
  const allTasks = useSelector((store) => store.tasks)

  return (
    <>
      <AddNewTask />
      {allTasks.map((task) => (
        <TaskList key={task.id} task={task} />
      ))}
    </>
  )
}
