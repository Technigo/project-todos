import React from 'react'
// import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Task } from './Task'
import { HandleTasks } from './HandleTasks'
import { EmptyList } from './EmptyList'

// import { tasks } from 'reducers/tasks'




export const TaskList = () => {
  const allTasks = useSelector(store => store.tasks.taskArray)

  if (allTasks.length) {
    return (
      <div>
        {allTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
        <HandleTasks />
      </div>
    )
  } else return <EmptyList />
}
