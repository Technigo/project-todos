/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { tasks } from './Reducers/tasks';

const AddTasks = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: Date.now().toString(),
      name: inputValue,
      isListed: true };
    dispatch(tasks.actions.AddTasks(newTask));
    setInputValue('');
  }

  return (
    <Wrapper>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addtodotask">
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addtodotask" type="text" />
        </label>
        <StyledButton type="submit">Add To Do</StyledButton>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border:red 2px solid;
`;
const StyledButton = styled.button`
  text-align: center;
  font-family: 'Dongle', sans-serif;
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #005F6B;
  }
`;

export default AddTasks;