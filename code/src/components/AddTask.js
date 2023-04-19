import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      text: inputValue,
      complete: false
    };
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }
  return (
    <AddTaskSection>
      <AddTaskForm onSubmit={onFormSubmit}>
        <AddTaskLabel htmlFor="addTaskInput">
            Add todos here!
        </AddTaskLabel>
        <AddTaskInput
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="addTaskInput"
          type="text" />
        <AddTaskButton type="submit">Add Now!</AddTaskButton>
      </AddTaskForm>
    </AddTaskSection>
  )
}
const AddTaskSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
`;

const AddTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddTaskLabel = styled.label`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const AddTaskInput = styled.input`
  padding: 0.5rem;
  font-size: 1.5rem;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-bottom: 1rem;
  width: 100%;
`;

const AddTaskButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: #1abc9c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;