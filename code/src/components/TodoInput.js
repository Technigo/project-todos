import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { Button } from '../lib/Button'

const TodoForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-gap: 10px;
  margin: 0 auto;
  width: 90%;
`

const TodoInputField = styled.input`
  height: 30px;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  background: #eaceca;
  color: #3e3e2d;
  font-size: 12px;

  ::placeholder {
    color: #3e3e2d;
    opacity: 1;
  }
  
  :-ms-input-placeholder {
    color: #3e3e2d;
  }
  
  ::-ms-input-placeholder {
    color: #3e3e2d;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const TodoInput = () => {
  const dispatch = useDispatch()

  //Local state for input used for dispatch for todo description
  const [inputValue, setInputValue] = useState('')

  //Function used when clicking on submit button, adds todo into array of todos
  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(todos.actions.addTodo({
      id: Date.now(),
      description: inputValue,
      done: false,
      show: true
    }))
    setInputValue('') //Empties the input field on submit
  }

  return (
    <TodoForm onSubmit={handleOnSubmit}>

      <TodoInputField
        aria-label="Enter task here"
        type='text'
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder='Add task...'
        maxLength={50} />

      <Button
        aria-label='Submit task'
        type='submit'
        disabled={inputValue < 1 ? true : false}
        background={'#3e3e2d'}
        size={'1.5em'}
      >+</Button>

    </TodoForm >
  )
}