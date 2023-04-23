import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';

const StyledAddTaskContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    border: none;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f3ee;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    box-shadow: 0 5px 8px  rgb(140,115,115,0.1), 0 3px 10px  rgb(140,115,115,0.1);

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
`;

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 22px;
    font-family: 'Caveat', cursive;

    @media (min-width: 667px) {
        font-size: 26px;
      }

    input {
      margin: 10px 0;
      width: 90%;
      font-size: 18px;
      border: none;
      border-radius: 25px;
      -webkit-border-radius: 25px;
      -moz-border-radius: 25px;
      padding: 5px;

      &:focus {
        outline: black solid 1px;
        background-color: white;
      }
    }
`;

const StyledAddBtn = styled.button`
    display: flex;
    align-items: center;
    border: solid grey 1px;
    background-color: #B7B7A4;
    padding: 5px;
    border-radius: 10px 3px 10px 3px;
    -webkit-border-radius: 10px 3px 10px 3px;
    -moz-border-radius: 10px 3px 10px 3px;
    box-shadow: 0 5px 8px  rgb(140,115,115,0.2), 0 3px 10px  rgb(140,115,115,0.2);
    cursor: pointer;

    @media (min-width: 667px) {
      padding: 10px;
      }

    &:hover {
      transform: scale(1.15);
    }

    &:active {
      background-color: #A5A58D;
    }
`;

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onSubmitAddTask = (event) => {
    event.preventDefault(); // This prevents the default behavior of the event
    const newTask = {
      id: Date.now().toString(),
      name: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isDone: false,
      createdAt: new Date().toISOString()
    }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue(''); // This resets the input state to empty
  }

  return (
    <StyledAddTaskContainer>
      <form onSubmit={onSubmitAddTask}>
        <StyledLabel htmlFor="addTaskInput">
            Add new task
          <input
            type="text"
            value={inputValue} // This is connected to the reset of the state in the text input
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput" />
        </StyledLabel>
        <StyledAddBtn type="submit">
          <img src={`${process.env.PUBLIC_URL}/assets/icons8-plus-math-24.png`} alt="Plus sign" />
        </StyledAddBtn>
      </form>
    </StyledAddTaskContainer>
  )
}