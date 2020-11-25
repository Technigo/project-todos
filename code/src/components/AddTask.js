import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { tasklist } from '../reducers/tasklist'

export const AddTask = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = event => {
    event.preventDefault()

    dispatch(tasklist.actions.addTodo(inputValue))

    setInputValue('')
  }

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input 
          placeholder='What do you want to do?'
          type='text'
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}>
        </input>
        <button 
          disabled={!inputValue}
          type='submit'
          value='Add task'
        >
          <span>Add Task</span>
        </button>
      </form>
    </div>
  )
}