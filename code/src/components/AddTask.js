import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';
import { Footer } from 'components/Footer';

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

  return (
    <AddTaskSection>
      <AddTaskForm onSubmit={onFormSubmit}>
        <AddTaskLabel htmlFor="addTaskInput">
        👇 ADD Here 👇
        </AddTaskLabel>
        <AddTaskInput
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="addTaskInput"
          type="text"
          placeholder="Enter a task..."
          onKeyPress={handleKeyPress} />
        <AddTaskButton type="submit">Add Now!</AddTaskButton>
      </AddTaskForm>
      <Footer />
    </AddTaskSection>
  )
}
const AddTaskSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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