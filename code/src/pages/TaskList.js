import React from 'react'

import ToDos from '../components/ToDos'
import AddTask from '../components/AddTask'


const TaskList = () => {
  return (
    <div>
      <ToDos />
      <p>No. of open todos: </p> 
      <AddTask /> 
    </div>

  )
}

export default TaskList
