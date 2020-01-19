import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { todos } from "../reducers/todos"

import "./addTask.css"
import addSymbol from "icons/icons8-plus.svg"

export const AddTask = () => {
  const dispatch = useDispatch()

  const [task, setTask] = useState("")

  const handleFormSubmit = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addTask(task))
    setTask("")
  }

  return (
    <form className="task-form" onSubmit={handleFormSubmit}>

      <input
        aria-label="Write a new todo"
        type="text"
        placeholder="E.g. Start to code"
        onChange={(event) => setTask(event.target.value)}
        value={task}
        className="task-input" />

      <button
        aria-label="Add task"
        type="submit"
        value={task}
        disabled={task.length === 0 ? "disabled" : ""}
        className="task-submit"  >
        <img src={addSymbol} alt="Add task" className="add-symbol" />
      </button>

    </form >
  )
}