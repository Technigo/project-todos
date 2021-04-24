import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

const AddTodo = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTodo = {
      id: uniqid(),
      decription: value,
      isComplete: false
    }
    dispatch(todos.actions.addTodo(newTodo))
    setValue('')
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="form-container">
      <form className="add-todo" onSubmit={onFormSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Add to do"
        />
        <button className="add-button" type="submit">
          <img src="./icons/icons8-plus-48.png" alt="A plus icon" />
        </button>
      </form>
    </div>
  )
}

export default AddTodo
