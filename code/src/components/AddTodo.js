import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import uniqid from "uniqid"

import todos from "reducers/todos"

const Label = styled.label`
  margin: 10px;
`

const AddTodos = () => {
  const [inputValue, setInputValue] = useState("")

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTodo = {
      id: uniqid(),
      name: inputValue,
      completed: false,
    }

    dispatch(todos.actions.addItem(newTodo))

    setInputValue("")
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Label>
        <input
          type="text"
          placeholder="New todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddTodos
