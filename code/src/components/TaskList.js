import React from 'react'
import Task from 'components/Task'

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