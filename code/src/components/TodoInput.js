import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos.js'
import { Form } from 'lib/Form'
import { AddTodo } from 'lib/Button'
import { InputText } from 'lib/Text'

// Receives listId as input
export const TodoInput = () => {
  const dispatch = useDispatch()

  // State for input from text box
const [inputValue, setInputValue] = useState("")

  // Create handle submit function to dispatch addTodo  
const handleOnSubmit = (e) => {
  e.preventDefault()

  dispatch(
    todos.actions.addTodo({
        description: inputValue,
        done: false
    })
  )

  setInputValue("")
}
  
return (
 <Form onSubmit={handleOnSubmit}>
    <InputText
    type="text"
    onChange={e => setInputValue(e.target.value)}
    value={inputValue}
    required
    ></InputText>
    <AddTodo
    type="submit"
    value="+"
    ></AddTodo>
  </Form>
  )
};