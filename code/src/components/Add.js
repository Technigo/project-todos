import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toDoItems from 'reducers/todos';
import styled from 'styled-components/macro';

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
      <input id="add" type="text" placeholder="Add to do" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button type="submit">Add item</button>
    </StyledForm>
  )
}

export default Add;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row-reverse;
`;