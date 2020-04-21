import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from './Header'
import { TaskList } from './TaskList'
import { ClearAllButton } from './ClearAllButton'
import { tasklist } from 'reducers/tasklist'

import './style/All.css'
import './style/Background.css'
import './style/AddTask.css'

export const ToDoScreen = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = event => {
    event.preventDefault()

    dispatch(tasklist.actions.addToDo(inputValue))

    setInputValue('')
  }

  return (
    <main className='all'>
      <Header />
      <TaskList />
      <div className='footer'>
        <form
          className='add-task-container'
          onSubmit={handleAddTask}>
          <input
            className='text-input'
            type='text'
            onChange={event => setInputValue(event.target.value)}
            value={inputValue}>
          </input>
          <input
            className='button'
            type='submit'
            value='Add task'>
          </input>
        </form>
      </div>
      <ClearAllButton />
    </main>
  )
}