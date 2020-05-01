import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoitem } from './Reducers/todoitem';

export const InputToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todoitem.actions.addItem(input))
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit">
        +
      </button>
      <input
      type="text"
        placeholder="Add Task"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      >
      </input>
       </form>
  )
}