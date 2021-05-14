import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'

import tasks from '../reducers/tasks'

export const AddTaskForm = () => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      id: uniqid(),
      text: value,
      isComplete: false
    }

    dispatch(tasks.actions.addTask(newTask))
    setValue('') //clears the input form after submit
  }

return (
  <form onSubmit={onFormSubmit} className='form'>
    <input
      type='text'
      value={value}
      onChange={e => setValue(e.target.value)}
      className='text-input'
      placeholder='Add todo'
    />
    <button type='submit' className='btn-input'>+</button>
  </form>
)

}