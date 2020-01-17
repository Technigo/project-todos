import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'


export const AddTaskForm = () => {
  const [todos, setTodos] = useState('')
  const dispatch = useDispatch()


  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask(todos))
    setTodos('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo:
      <input type="text" value={todos} onChange={(event) => setTodos(event.target.value)} />
      </label>
      <button type="submit">Add task</button>
    </form>
  )


}




