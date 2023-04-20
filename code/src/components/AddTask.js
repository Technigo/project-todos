import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';

const StyledAddTaskContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    border: solid pink 3px;
    margin: 20px 0;
    padding: 10px;
    border-radius: 25px 5px 25px 5px;
    -webkit-border-radius: 25px 5px 25px 5px;
    -moz-border-radius: 25px 5px 25px 5px;
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
        <label htmlFor="addTaskInput">
            Add new task
          <input
            type="text"
            value={inputValue} // This is connected to the reset of the state in the text input
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput" />
        </label>
        <button type="submit">➕</button>
      </form>
    </StyledAddTaskContainer>
  )
}