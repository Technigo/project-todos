/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/toDos';
import styled from 'styled-components';

const TodoInput = () => {
  const dispatch = useDispatch();
  const toDoList = useSelector((store) => store.toDos.items);

  const [value, setValue] = useState('')
  // When form is submitted "value" is asigned to "content" of an objectis which is pushed
  // into toDos-array by addItem-action.
  const handleToDoSubmit = (event) => {
    event.preventDefault();
    dispatch(toDos.actions.addItem(value))
    setValue(''); // To clear inpur field
  }
  return (
    <FlexForm onSubmit={handleToDoSubmit}>
      <label htmlFor="todo-input">
        <StyledInput
          id="todo-input"
          type="text"
          value={value}
          onChange={((event) => setValue(event.target.value))} />
      </label>
      <AddButton type="submit">Add</AddButton>
    </FlexForm>
  )
}

export default TodoInput;

const FlexForm = styled.form`
  display: flex;
  justify-content: space-between;
`
const StyledInput = styled.input`
  height: 2rem;
  width: 50vw;
`

const AddButton = styled.button`
  width: 3rem;
  height: 2rem;
  margin-left:1rem;
`