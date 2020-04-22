import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasklist } from 'reducers/tasklist'

export const AddTask = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = event => {
    event.preventDefault()

    dispatch(tasklist.actions.addToDo(inputValue))

    setInputValue('')
  }

  return (
    <div className='footer'>
        <form
          className='add-task-container'
          onSubmit={handleAddTask}>
          <input
            className='text-input'
            placeholder='What do you need to do?'
            type='text'
            onChange={event => setInputValue(event.target.value)}
            value={inputValue}>
          </input>
          <button
            className='button'
            disabled={!inputValue}
            type='submit'
            value='Add task'>
              <span className='button-text'>
                Add task
              </span>
          </button>
        </form>
      </div>
  )
}