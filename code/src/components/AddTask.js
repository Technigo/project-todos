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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onFormSubmit(event);
    }
  }
  const deleteAllTodosBtnClick = () => {
    dispatch(tasks.actions.deleteAllTask());
  }

  return (
    <AddTaskSection>
      <AddTaskForm onSubmit={onFormSubmit}>
        <AddTaskLabel htmlFor="addTaskInput">
        👇 ADD task Here 👇
        </AddTaskLabel>
        <AddTaskInput
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="addTaskInput"
          type="text"
          placeholder="Enter a task..."
          onKeyPress={handleKeyPress} />
        <AddTaskButton type="submit">Add Now!</AddTaskButton>
        <DeleteButton type="button" onClick={deleteAllTodosBtnClick}> Psst... delete everything </DeleteButton>
      </AddTaskForm>
    </AddTaskSection>
  )
}
const AddTaskSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0ccda;
  // height: 400px;
  padding-bottom: 40px;
  width: 100%;
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
  border: dotted purple;
  margin-top: 1.5rem;
  padding: 10px;
  font-family: 'Mystery Quest', cursive;
  &:hover {
    animation: updown 0.8s ease-in-out infinite;
  }

  @keyframes updown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-7px);
    }
    100% {
      transform: translateY(0);
    }
  }
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
    padding-left: 10px;
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
const DeleteButton = styled.button`
  padding: 0.2rem 0.8rem;
  font-size: 1.1rem;
  background-color: #eb9494;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 15px;
  cursor: pointer;
    font-family: 'Mystery Quest', cursive;

   &:hover {
    background-color: lightgreen;
  }
`