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
      <input aria-label="Write a new todo" className="task-input" type="text" placeholder="E.g. Start to code" onChange={(event) => setTask(event.target.value)} value={task} />
      <button type="submit" className="task-submit" value={task} disabled={task.length < 5 ? "disabled" : ""} aria-label="Add task">+</button>
    </form >
  )
}