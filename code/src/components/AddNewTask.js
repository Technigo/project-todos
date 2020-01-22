import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const AddNewTask = () => {
  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask(newTask))
    setNewTask('')
  }


  return (
    <form class="addNewTask-form" onSubmit={handleSubmit}>
      <button class="submit-button" type="submit">+</button>
      <label>
        <input
          class="New-task"
          type="text"
          placeholder="Add your new task!"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
      </label>
    </form>
  )
}



