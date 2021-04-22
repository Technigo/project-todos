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
    <form className="todo-input-form" onSubmit={onFormSubmit}>
      <input className="input-thought"
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="Add todo"
      />
      <button className="send-button" type="submit">+</button>
    </form>
  )
}

export default AddTodo
