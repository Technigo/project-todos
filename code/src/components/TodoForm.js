import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

const AddContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Reenie Beanie;
  background: rgba(130 255 173 / 21%);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  @media (min-width: 1200px) {
    margin: 0 30rem 0 30rem;
  }
`

const AddButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 12px;
  background: transparent;
  font-size: 2rem;
`

const InputField = styled.input`
  width: 16rem;
  height: 3rem;
  background: transparent;
  border: none;
  outline: none;
  font-family: Rock Salt;
  font-size: 1.1rem;
  color: black;
  letter-spacing: 0.2rem;
`

const TodoForm = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTodo = {
      id: uniqid(),
      description: value,
      isComplete: false
    }

    dispatch(todos.actions.addTodo(newTodo))
    setValue('')
  }

  return (
    <AddContainer>
      <form onSubmit={onFormSubmit} spellCheck="false">
        <AddButton type="submit">+
        </AddButton>
        <InputField  
          type="text"
          placeholder="Add POST IT" 
          value={value}
          onChange={event => setValue(event.target.value)}>
        </InputField>
      </form>
    </AddContainer>
  )
}

export default TodoForm