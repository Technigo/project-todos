import React from 'react'
import { useDispatch } from 'react-redux'
import {todoStore} from '../reducers/todoStore'

export const NewTask = () => {
const dispatch = useDispatch()

  const handleNewTask = () => {
    dispatch(todoStore.actions.createTask(newtodo))
  }
  const newtodo = {id:2, task:'my new task'}
  return (
    <div>      
      Find me in NewTask.js!
      <button onClick={handleNewTask}>press me</button>
    </div>
  )
}
