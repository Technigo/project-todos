import React from 'react'
import { useSelector } from 'react-redux'
import Task from 'components/Task'

const TaskList = () => {

const list = useSelector(state => state.tasks)

  return (
    <ul>
      {list.map((task, index) => (
        <Task 
          key={index}
          task={task} />
      ))}
    </ul>
  )
}

export default TaskList