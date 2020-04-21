import React, { useState } from "react"
import styled from 'styled-components'
import { useDispatch } from "react-redux"
import { todos } from "../reducers/todos"

const Form = styled.form`
margin: 8px;
display: flex;
flex: column;

  input {
    font-size: 22px;
    width: 40%;
  }

  button {
    padding: 8px;
    font-size: 22px;
    margin-left: 16px;
  }
`

export const TodoInput = () => {
  const dispatch = useDispatch()

  //State for input from text field
  const [inputValue, setInputValue] = useState("")

  //Handle submit function to dispatch addTodo
  const handleSubmit = event => {
    event.preventDefault()

    //Dispatches action to save new todo item
    dispatch(todos.actions.addTodo({
        description: inputValue,
        done: false
    })
    )

    //Clears the text field
    setInputValue("")
  }

  return <Form onSubmit={handleSubmit}>
    <input
      type="text"
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
    ></input>
    <button
      type="submit">Add Todo</button>
  </Form>
}