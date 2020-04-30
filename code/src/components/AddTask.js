import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todo } from '../reducers/todo'

export const AddTask = () => {
  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todo.actions.addItem({ task, category })) // name, category as payload
    setTask('') // Clearing the input
    setCategory('') // Clearing the input
  }

  const enabled = task.length > 0

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label>
          Category:
          <select
            value={{}}
            onChange={() => { }}
          >
            <option value='To-Do'>To-Do</option>
            <option value='Shopping'>Shopping</option>
            <option value='Work'>Work</option>
            <option value='Family'>Family</option>
            <option value='Personal'>Personal</option>
          </select>
        </label>

        <label>
          Task:
          <input
            type='text'
            value={task}
            required
            placeholder='+ add a new task'
            onChange={(event) => setTask(event.target.value)}
          />
        </label>

        <button type='submit' disabled={!enabled}>Add task</button>
      </form>
    </>
  )
}
