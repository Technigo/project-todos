import React from 'react'
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/todos' // need to import the reducer we dispatch our action to

export const Task = ({ task }) => {

  const dispatch = useDispatch()

  const removeTask = (id) => {
    // alert("are you sure?")
    dispatch(todos.actions.removeTask(id))
  }

  const updateTask = (task) => {
    dispatch(todos.actions.updateTask(task))
  }

  return (
    <li>
      {task.text}<br></br>
      <button onClick={() => removeTask(task.id)}>
        delete
      </button>< br ></br >
      <button
        onClick={() => updateTask(task)}>
        {task.isComplete ? "complete" : "not complete"}
      </button>< br ></br > <br></br>
    </li >
  )
}