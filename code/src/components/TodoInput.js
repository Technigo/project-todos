import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todos } from '../reducers/todos'

export const TodoInput = () => {
  const dispatch = useDispatch()
  //State for input
  const [inputValue, setInputValue] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(todos.actions.addTodo({
      description: inputValue,
      done: false
    }))
    setInputValue('')
  }

  return (
    <TodoForm onSubmit={handleOnSubmit}>
      <TodoInputField
        type='text'
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder='Add task...'
        maxLength={50}
      ></TodoInputField>
      <Submit
        aria-label='Submit task'
        type='submit'
        disabled={inputValue < 1 ? true : false}
      >+</Submit>
    </TodoForm >
  )
}

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

const Submit = styled.button`
  opacity: ${prop => prop.disabled ? 0.7 : 1};
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px; 
  background: #b55136;
  color: #fff;
  font-size: 2em;
`