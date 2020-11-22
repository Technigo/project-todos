import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

// import styled fron 'styled-components'

export const AddTodoForm = () => {
  const [text, setText] = useState('')
  // What does dueDate do here? 
  const [dueDate, setDueDate] = useState()

  const dispatch = useDispatch()


  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addItem({ text, dueDate }))
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add todo:
        <input
          type='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <button type='submit'>Add todo</button>
    </form>
  )
}