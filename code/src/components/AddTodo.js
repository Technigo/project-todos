import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import todos from "../reducers/todos"

const Button = styled.button`
  align-self: center;
  color: whitesmoke;
  font-family: "Inconsolata";
  border-radius: 10px;
  padding: 12px;
  font-size: 12px;
  cursor: pointer;
`

const AddTodo = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
    setInput("")
  }

  return (
    <div>
      <p className='header-text'>Things that has to be done!</p>
      <input
        className='text-input'
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        maxLength='20'
      />
      <Button onClick={onAddTodo}>
        <span role='img' aria-label='plus-icon'>
          ➕
        </span>
      </Button>
    </div>
  )
}

export default AddTodo
