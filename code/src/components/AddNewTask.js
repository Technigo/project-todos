import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import "./AddNewTask.css"

export const AddNewTask = () => {
  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask(newTask))
    setNewTask('')
  }


  return (
    <form class="form" onSubmit={handleSubmit}>
      <button class="submit-btn" type="submit">
        <span className="plus">+</span>
      </button>
      <label>
        <input
          className="task"
          type="text"
          placeholder="Add your new task!"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
      </label>
    </form>
  )
}



