import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import uniqid from "uniqid"

import todos from "reducers/todos"

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
      <label>
        New todo : &nbsp;
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddTodos
