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
  //State for input
  const [inputValue, setInputValue] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(todos.actions.addTodo({
      description: inputValue,
      done: false,
      show: true
    }))
    setInputValue('')
  }

  return (
    <TodoForm onSubmit={handleOnSubmit}>

      <TodoInputField
        aria-label="Enter task here"
        type='text'
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder='Add task...'
        maxLength={50}
      ></TodoInputField>

      <Button
        aria-label='Submit task'
        type='submit'
        disabled={inputValue < 1 ? true : false}
        background={'#b55136'}
        size={'1.5em'}
      >+</Button>

    </TodoForm >
  )
}