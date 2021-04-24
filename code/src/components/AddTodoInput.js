import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

import AddTodoButton from './AddTodoButton'

const AddTodoInput = () => {
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

  const isAddInputFilled = () => {
    if (value === "") {
      return false
    }
    return true
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
        <AddTodoButton
          isAddInputFilled={isAddInputFilled} />
      </form>
    </div>
  )
}

export default AddTodoInput