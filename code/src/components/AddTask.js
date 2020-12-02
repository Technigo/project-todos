import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { tasklist } from '../reducers/tasklist'
import { AddTaskContainer, InputField, AddTaskButton } from './styled/addtask'


export const AddTask = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = event => {
    event.preventDefault()
    dispatch(tasklist.actions.addTodo(inputValue))
    setInputValue('')
  }

  return (
    <AddTaskContainer>
      <form onSubmit={handleAddTask}>
        <InputField 
          placeholder='What do you want to do?'
          type='text'
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}>
        </InputField>
        <AddTaskButton 
          disabled={!inputValue}
          type='submit'
          value='Add task'
        >
          <span>Add Task</span>
        </AddTaskButton>
      </form>
    </AddTaskContainer>
  )
}