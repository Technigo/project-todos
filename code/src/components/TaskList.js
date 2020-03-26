import React from 'react'
import Task from 'components/Task'

const TaskList = ( tasks ) => {

  return (
    <ul>
      {/* <li>{tasks.map((task, index) => (
        <Task 
          key={index}
          id={index}
          task={task} />
      ))}</li> */}
    </ul>
  )
}

export default TaskList