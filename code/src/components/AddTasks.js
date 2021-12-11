import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// to trigger the action onclick we have to import { useDispatch } from "react-redux";
import tasks from 'reducers/tasks';

const AddTaskContainer = styled.section`
  border: 2px solid orange;
  margin: 10px auto;
  width: 90%;
  display: flex;
  align-items: center;
`;
const AddTaskButton = styled.button`
  border-radius: 10px;
  margin: 5px;
`;

const AddTaskText = styled.input`
  color: blue;
  text-transform: uppercase;
  border: none;
`;

const AddTasks = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const onAddTasks = () => {
    dispatch(tasks.actions.addTasks(input));
    // could have been written below but too much code
  };

  return (
    <AddTaskContainer>
      <AddTaskText
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <AddTaskButton onClick={onAddTasks}>Add task</AddTaskButton>
    </AddTaskContainer>
  );
};

export default AddTasks;
