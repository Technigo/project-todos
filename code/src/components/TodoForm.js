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
      <button className="submit-button" type="submit">Add +</button>
      <input
        placeholder="Add your task"
        className="todo-input"
        type="text"
        value={value}
        onChange={e => setvalue(e.target.value)}
      />
    </form>
  )
} 

export default TodoForm