import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {todoStore} from '../reducers/todoStore'

export const NewTask = () => {
const dispatch = useDispatch()
const [taskInput, setTaskInput] = useState("")

  const handleNewTask = (event) => {
    event.preventDefault()
    dispatch(todoStore.actions.createTask({task:taskInput}))
  }
 //What is the smallest screen size you design for 320px
  return (
       <form onSubmit={handleNewTask}>
      <input
        type="text"
        onChange={e => setTaskInput(e.target.value)}
        value={taskInput}
      ></input>
      <input
        type="submit"
        value="Add Todo"
      ></input>
    </form>
  )
}

//Add a due date to a task

