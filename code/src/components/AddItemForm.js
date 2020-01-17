import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { tasks } from "reducers/tasks"

export const AddItemForm = () => {
  const [taskInput, setTaskInput] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submit", taskInput)
    dispatch(tasks.actions.addTask(taskInput))
    setTaskInput("")
    //To empty input-field after submit

    // dispatch(tasks.actions.countTasks())

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add task:
      <input type="text" value={taskInput} onChange={(event) => setTaskInput(event.target.value)} />
      </label>
      <button type="submit">Add task</button>
    </form>
  )
}