import React from 'react'
import { useDispatch } from 'react-redux'
import {todoStore} from '../reducers/todoStore'

export const NewTask = () => {
const dispatch = useDispatch()

  const handleNewTask = () => {
    dispatch(todoStore.actions.createTask(newtodo))
  }
  const newtodo = {task:'my new task'}
  return (
    <div>      
      Find me in NewTask.js!
      <button onClick={handleNewTask}>press me</button>
    </div>
  )
}

//Add a due date to a task

