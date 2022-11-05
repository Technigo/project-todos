/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todos from 'reducers/todo'

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()
    const newTodo = { id: Date.now().toString(),
      text: inputValue,
      isCaught: false }
    dispatch(todos.actions.addItem(newTodo))
    setInputValue('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
           New to-do:
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo