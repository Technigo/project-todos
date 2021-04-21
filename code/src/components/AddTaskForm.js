import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useSelector, useDispatch } from 'react-redux'

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
  <form onSubmit={onFormSubmit}>
    <input
      type='text'
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    <button type='submit'>Add todo</button>
  </form>
)

}