import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"

import { tasks } from "reducers/tasks"


export const AddContainer = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [newTask, setNewTask] = useState("")

  const dispatch = useDispatch()

  const handleClick = () => {
    setIsClicked(prevState => !prevState)
  }

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  return (
    <section>

      <button onClick={handleClick}>Add task</button>

      {isClicked &&
        <>
          <input type="text" value={newTask} onChange={handleChange} />
          <button onClick={() => dispatch(tasks.actions.addTask(newTask))} >Add to list</button>
        </>
      }



    </section>
  )
}