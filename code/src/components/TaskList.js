import React from 'react'
import { useSelector } from 'react-redux'
import Task from 'components/Task'

const TaskList = () => {

const list = useSelector( state => state.tasks)

  return (
    <ul>
      {list.map((task) => (
        <Task 
          key={task.id}
          task={task} />
      ))}
    </ul>
  )
}

export default TaskList