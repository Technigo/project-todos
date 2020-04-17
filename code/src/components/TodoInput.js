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
    </TodoForm>
  )
}

const TodoForm = styled.form`
  
`

const TodoInputField = styled.input`
  
`

const Submit = styled.input`
  
`