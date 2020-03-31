import React from 'react'
import Task from 'components/Header/Task'

const TaskList = ({ tasks }) => {
console.log({ tasks })
  return (
    <ul>
        {tasks.map(task => (
        <Task 
          key={task.id}
          task={task} 
          />
      ))}
    </ul>
  )
}

export default TaskList