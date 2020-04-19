import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from './Header'
import { TaskList } from './TaskList'
import { tasklist } from 'reducers/tasklist'

export const ToDoScreen = ({ id }) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = event => {
    event.preventDefault()
   
    dispatch(tasklist.actions.addToDo(inputValue))

    setInputValue('')
  }

  return (
    <>
      <Header />
      <TaskList />
      <form
        onSubmit={handleAddTask}>
        <input
          type='text'
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}>
        </input>
        <input
          type='submit'
          value='Add task'>
        </input>
      </form>
    </>
  )
}