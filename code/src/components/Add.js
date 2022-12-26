import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import toDoItems from 'reducers/todos';

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
      <StyledInput
        id="add"
        type="text"
        placeholder="Add to do"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)} />
      <Button
        color="var(--color-gray)"
        disabled={inputValue.length < 2 || inputValue.length > 18}>
        <img src="images/add.svg" alt="add icon" />
      </Button>
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

export const Button = styled.button`
  border: none;
  background-color: var(--color-gray);
  width: 1.30rem;
  height: 1.30rem;
  border-radius: 50%;
`;