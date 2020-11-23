import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { tasks } from '../Reducers/tasks'

//This will be sent to the array inside tasks.js

export const UserInput = () => {
  const [task, setTask] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(task)
    dispatch(
      tasks.actions.addItem({
        taskInfo: {
          text: task,
          done: false,
        },
      })
    )
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder='Add task'
        onChange={(event) => setTask(event.target.value)}
        value={task}
      ></textarea>
      <button type='submit'>Add Task</button>
    </form>
  )
}
