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
        👇ADD Here👇
        </AddTaskLabel>
        <AddTaskInput
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="addTaskInput"
          type="text"
          placeholder="Enter a task..." />
        <AddTaskButton type="submit">Add Now!</AddTaskButton>
      </AddTaskForm>
    </AddTaskSection>
  )
}
const AddTaskSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0ccda;
  height: 300px;
`;

const AddTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddTaskLabel = styled.label`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background-color: beige;
  border-radius: 30px;
  margin-top: 1.5rem;
  padding: 10px;
  font-family: 'Mystery Quest', cursive;
`;

const AddTaskInput = styled.input`
  padding: 0.5rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 1rem;
  max-width: 80%;
  font-family: 'Mystery Quest', cursive;
  ::placeholder {
    font-family: 'Mystery Quest', cursive;
  }
`;

const AddTaskButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: #1abc9c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
    font-family: 'Mystery Quest', cursive;

   &:hover {
    background-color: lightgreen;
  }
`;