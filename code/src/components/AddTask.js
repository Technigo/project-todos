import React, { useState } from 'react'
import "./addTask.css"
import { useDispatch } from 'react-redux'
import { todoList } from '../reducers/todoList'

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("")

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(todoList.actions.addTask(task))
    setTask("")
  }

  return (
    <form className="task-form" onSubmit={handleFormSubmit}>
      <input className="task-input" type="text" placeholder="Add task" onChange={(event) => setTask(event.target.value)} value={task} />
      <button type="submit" className="task-submit" value={task}>Add task</button>
    </form>
  )
}