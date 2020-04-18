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
      ></TodoInputField>
      <Submit
        type='submit'
        value='+'
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
  background: #e8cbb9;
  font-size: 16px;
`

const Submit = styled.input`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 10px; 
  background: #ce745a;
  color: #fff;
  font-size: 2em;
`