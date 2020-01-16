import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const AddTask = () => {
  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask(newTask))
    setNewTask('')
  }


  return (
    <form class="addtask-form" onSubmit={handleSubmit}>
      <button class="add-button" type="submit">+</button>
      <label>
      <input 
        class="add-task"
        type="text"
        placeholder="Add task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      </label>

    </form>
  )
}