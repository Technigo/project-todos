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
        <EnterSection>
          <AddTaskInput
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text"
            placeholder="Enter a task..."
            onKeyPress={handleKeyPress} />
          <AddTaskButton type="submit">➕</AddTaskButton>
        </EnterSection>
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
  @media (min-width: 668px) {
    height: 100vh; /* Set the height to be the full viewport height */
}
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

const EnterSection = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: transparent;
border: dotted purple;
border-radius: 30px;
width: 244px;
gap: 0;

`

const AddTaskInput = styled.input`
  padding: 0.5rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 30px;
  border-bottom: 2px solid #ccc;

  max-width: 70%;
  font-family: 'Mystery Quest', cursive;
  ::placeholder {
    padding-left: 10px;
    font-family: 'Mystery Quest', cursive;
  }
`;

const AddTaskButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1abc9c;
  color: #fff;
  border: none;
  border-radius: 25px;
  margin-left: 5px;
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