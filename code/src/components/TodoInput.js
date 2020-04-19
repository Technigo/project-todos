import React, { useEffect, useState } from 'react'
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
        maxLength={25}
      ></TodoInputField>
      <Submit
        type='submit'
        value='+'
        disabled={inputValue < 1 ? true : false}
      ></Submit>
    </TodoForm >
  )
}

const TodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
`

const TodoInputField = styled.input`
  width: 75%;
  margin-right: 5px;
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
    width: 88%;
    font-size: 14px;
  }
`

const Submit = styled.input`
  opacity: ${prop => prop.disabled ? 0.7 : 1};
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 10px; 
  background: #b55136;
  color: #fff;
  font-size: 2em;
`