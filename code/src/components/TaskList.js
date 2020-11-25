import React from 'react'
import { useSelector } from 'react-redux'

import { Task } from './Task'
import { TaskContainer } from './styled/tasklist'

export const TaskList = () => {
  const allTasks = useSelector(store => store.tasklist.tasks)

  return (
    <>
      {allTasks.map((task) => (
        <TaskContainer>
          <Task 
            key={task.id} 
            id={task.id} 
            text={task.text} 
            complete={task.complete}
          />
        </TaskContainer>
      ))}
    </>
    
  )
}