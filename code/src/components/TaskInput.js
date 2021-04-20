import React, { useState } from 'react'

import './taskinput.css'


const TaskInput = () => {
  const [input, setInput] = useState('')

  const addTodo = () => {

  }

  return (
    <header className="header">
      <h1>Todo List</h1>
      <div className="input-wrapper">
        <input 
          type="text" 
          value={input} 
          onChange={event => setInput(event.target.value)}
        />
        <button onClick={addTodo}>Add task!</button>
      </div>
    </header>

  )
} 




 


export default TaskInput