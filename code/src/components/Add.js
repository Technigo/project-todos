import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import toDoItems from 'reducers/todos';
import Button from './Button';

const Add = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newItem = { id: Date.now().toString(),
      name: inputValue,
      isDone: false }
    dispatch(toDoItems.actions.addItem(newItem))
    setInputValue('');
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput id="add" type="text" placeholder="Add to do" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <Button src="images/add.svg" alt="add icon" color="var(--color-gray)" />
    </StyledForm>
  )
}

export default Add;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  align-content: stretch;
  width: 100%;
  gap: 0.5rem;
`;

export const StyledInput = styled.input`
  font-size: 1.25rem;
  padding: 0.75rem 0.5rem;
  border: none;
  width: 87.5%;

  &:focus-visible {
      outline: none;
    }
`;