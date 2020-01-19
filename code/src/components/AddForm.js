import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'
import './form.css'

export const AddForm = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todoList.actions.addTodo(todo))
    setTodo('')
  }
  return (
    <form onSubmit={handleSubmit} >
      <label className="form-container">
        <input type="text" className="input-container" value={todo} onChange={(event) => setTodo(event.target.value)} />
        <button type="submit" className="add-button">ADD</button>
      </label>
     
    </form>
  )
}