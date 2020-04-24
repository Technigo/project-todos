import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import { Container } from 'lib/Container'
import styled from 'styled-components'
import { Button } from 'lib/Button'
import DatePicker from 'react-datepicker' // Not used but keep for future iteration

const InputForm = styled.form`
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`
const TextInput = styled.input`
width: 250px;
font-size: 16px;
margin-right: 5px;
border: 1px solid #888;
border-radius: 5px;
padding: 4px;
`
// Receives listId as input
export const TodoInput = () => {
  const dispatch = useDispatch()
  // State for input from text box
  const [inputValue, setInputValue] = useState("")

  // Function to dispatch addTodo
  const handleOnSubmit = (event) => {
    event.preventDefault()

    // Dispatch action to save the new todo item
    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        done: false
      })
    )
    // Clear the text fields after save
    setInputValue("")
  }

  return (
    <Container>
      <InputForm onSubmit={handleOnSubmit}>
        <label>
          <TextInput
            type='text'
            onChange={event => setInputValue(event.target.value)}
            value={inputValue}
          />
        </label>
        <Button background='lightgray'>Add</Button>
      </InputForm>
    </Container>
  )
}