/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toDos from 'reducers/toDos';
import styled from 'styled-components';

const TodoInput = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();

  // When form is submitted "value" is asigned to "content" of an object which is pushed
  // into toDos-array by addItem-action.
  const handleToDoSubmit = (event) => {
    event.preventDefault();
    dispatch(toDos.actions.addItem(value))
    setValue(''); // To clear input field
  }
  return (
    <FlexForm onSubmit={handleToDoSubmit}>
      <label htmlFor="todo-input">
        <StyledInput
          id="todo-input"
          type="text"
          value={value}
          maxLength="60"
          placeholder="Add task"
          onChange={((event) => setValue(event.target.value))} />
      </label>
      <AddButton type="submit">Add</AddButton>
    </FlexForm>
  )
}

export default TodoInput;

const FlexForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: -9rem;
  background-color: rgba(62, 62, 62, 0.4);
  height: 7rem;
  width:80vw;
  
  @media(min-width: 600px) {
    position: static;
    background-color: transparent;
    width: auto;
    height: auto;

  }
`
const StyledInput = styled.input`
  height: 2rem;
  width: 50vw;
  box-shadow: 0.5rem 0.5rem 1rem #000;
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem;

  @media (min-width: 600px) {
    width: 375px;
  }
`

const AddButton = styled.button`
  width: 3.5rem;
  height: 2rem;
  background-color: #000;
  color: #fff;
  border-radius: 0.9rem;
  border: 0.05rem solid #fff;
  box-shadow: 0.5rem 0.5rem 1rem #000;
  text-transform: uppercase;
  
  @media(min-width: 600px) {
    margin-left:1rem;
  }
`