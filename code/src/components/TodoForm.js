/* eslint-disable linebreak-style */
import moment from 'moment'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import todos from '../reducers/todos'
import './todoForm.css'

const TodoForm = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: uniqid(),
      description: value,
      isComplete: false,
      timeCreated: moment().format('MMMM Do YYYY, h:mm a')
    }

    dispatch(todos.actions.addTodo(newTodo))
    setValue('')
  }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <button className="btn-submit" type="submit">Add task</button>
    </form>
  )
}

export default TodoForm
