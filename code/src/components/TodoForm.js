import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import '../index.css'
import todos from '../reducers/todos'


const TodoForm = () => {
  const [value, setvalue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newTask = {
      id: uniqid(),
      description: value,
      isComplete: false
    }
    dispatch(todos.actions.addTodo(newTask))
    setvalue('')
  }

  return (
    <form className="form-wrapper" onSubmit={onFormSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        onChange={e => setvalue(e.target.value)}
      />
      <button className="submit-button" type="submit">Add Task!</button>
    </form>

  )
} 

export default TodoForm