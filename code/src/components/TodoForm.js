import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

const TextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Reenie Beanie;
  background: rgba(130 255 173 / 21%);
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const AddButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 12px;
  background: white;
  font-size: 2rem;
`;

const InputField = styled.input`
  width: 16rem;
  height: 3rem;
  background: transparent;
  border: none;
  outline: none;
  font-family: Roboto;
  font-size: 1.5rem;
  color: black;
  margin-left: 1rem;
`;

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
    <TextContainer>
      <form onSubmit={onFormSubmit}>
        <AddButton type="submit">+
        </AddButton>
        <InputField  
          type="text"
          placeholder="Add to list"
          value={value}
          onChange={event => setValue(event.target.value)}>
        </InputField>
      </form>
    </TextContainer>
  )
}

export default TodoForm