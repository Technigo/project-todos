import React from 'react'
import ToDos from './ToDos'

const TaskList = () => {

  return (
    <div>
      <ToDos />
      <p>No. of open todos:</p>  
      <label>Add new task
        <input type='text'></input>
      </label>
    </div>

  )
}

export default TaskList
