import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import todos from 'reducer/todos'

const AddTodo = () => {
  const [inputValue, setInputvalue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTodo = {
      id: uniqid(),
      Todo: inputValue,
      isDone: false,
    }

    dispatch(todos.actions.addItem(newTodo))
    setInputvalue('')
  }

  return (
    <article className="input-text">
      <form onSubmit={onFormSubmit}>
        <label>
          &nbsp;
          <input
            className="input-label"
            type="text"
            required
            value={inputValue}
            onChange={(e) => setInputvalue(e.target.value)}
          />
          &nbsp;
        </label>
        <button type="submit">Add</button>
      </form>
    </article>
  )
}

export default AddTodo
