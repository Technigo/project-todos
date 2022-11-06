import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components/macro'
import { AddBtn, AddCheck } from 'GlobalStyle'

// Reducer
import todo from 'reducers/todo'

import vBtn from '../assets/icon_check.png'

export const AddTodo = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const onAddTodo = () => {
    dispatch(todo.actions.addTodo(input))
    setInput('')
  }

  return (
    <AddFormWrapper onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={input}
        placeholder="Add task here...."
        onChange={(event) => setInput(event.target.value)} />
      <AddBtn type="submit" onClick={onAddTodo} disabled={input.length === 0}>
        <AddCheck src={vBtn} alt="add task" />
      </AddBtn>
    </AddFormWrapper>
  )
}

// ---------Styled Components-----

const AddFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledInput = styled.input`
  font-family: var(--font-todo);
  font-size: 1.5rem;
  height: 2em;
  letter-spacing: 1.5px;
  color: var(--clr-main);
  text-align: center;
  width: 310px;
  border: none;
  border-bottom: 2px solid var(--clr-darkgrey);
  background-color: var(--clr-grey);
  margin-bottom: 1.5em;
  outline: none;

  &:focus {
   border: 2px solid var(--clr-darkgrey);
  }
`;