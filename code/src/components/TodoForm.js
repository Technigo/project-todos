import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

const TodoForm = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: uniqid(),
      description: value,
      isComplete: false,           
    }

    dispatch(todos.actions.addTodo(newTodo))
    setValue('')
  }

  return (    
  <form className="todo-form" onSubmit={onFormSubmit}>
    <input 
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)} 
      placeholder="Write your tasks here..."
    />
    <button
      className="add-todo-btn"
      type="submit" 
      disabled={!value}     
    >Add todo
    </button> 
  </form>
  )}

  export default TodoForm