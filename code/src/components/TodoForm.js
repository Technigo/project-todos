import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import '../index.css'
import todos from '../reducers/todos'


const TodoForm = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newTask = {
      id: uniqid(),
      description: inputValue,
      isComplete: false
    }
    dispatch(todos.actions.addTodo(newTask))
    setInputValue('')
  }

  return (
    <form className="form-wrapper" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.inputValue)}
      />
      <button type="submit">Add Task!</button>
    </form>

  )
} 

export default TodoForm