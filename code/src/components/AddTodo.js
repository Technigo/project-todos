import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import { AddBtn, AddArrow } from 'GlobalStyle'

// Reducer
import todo from 'reducers/todo'

import arrowBtn from '../assets/arrow.png'

export const AddTodo = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todo.actions.addTodo(input))
    setInput('')
  }

  return (
    <InputWrapper>
      <StyledInput
        type="text"
        value={input}
        placeholder="Add task here.."
        onChange={(event) => setInput(event.target.value)} />
      <AddBtn type="submit" onClick={onAddTodo} disabled={input.length === 0}>
        <AddArrow src={arrowBtn} alt="add task" />
      </AddBtn>
    </InputWrapper>
  )
}

// ---------Styled Components-----

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledInput = styled.input`
  font-family: var(--font-todo);
  font-size: 1rem;
  height: 3em;
  letter-spacing: 1.5px;
  color: var(--clr-main);
  text-align: center;
  width: 310px;
  border: none;
  border-bottom: 2px solid var(--clr-darkgray);
  background-color: var(--clr-accent);
  margin-bottom: 1.5em;

  &:focus {
    border: 2px solid var(--clr-accent);
  }
`;