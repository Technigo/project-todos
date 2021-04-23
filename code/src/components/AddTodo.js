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

  return (
    <div className="form-container">
      <form className="add-todo" onSubmit={onFormSubmit}>
        <input

          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
          placeholder="Add todo"
        />
        <button className="add-button" type="submit">
          <img src="./icons/icons8-plus-48.png" />
        </button>
      </form>
    </div>
  )
}

export default AddTodo
