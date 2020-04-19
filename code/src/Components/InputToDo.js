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

  //Add todoitems by mapping the items in the todolist in the store
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="textarea"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      >
      </input>
      <button
        type="submit">
        Submit Todo
      </button>
    </form>

  )
}