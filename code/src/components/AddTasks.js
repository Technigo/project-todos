import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import tasks from 'reducers/tasks';

const AddTaskBox = styled.div`
  background-color: skyblue;

  input {
    width: 80%;
  }
`;

const AddTasks = () => {
  const [input, setInput] = useState('');

  const onSetInput = (e) => {
    setInput(e.target.value);
  };

  const dispatch = useDispatch();

  const onAddTask = () => {
    dispatch(tasks.actions.addTask(input));
  };

  return (
    <AddTaskBox>
      <input type='text' value={input} onChange={onSetInput} />
      <button onClick={onAddTask}>
        {' '}
        <span role='img' aria-label='img'>
          ➕
        </span>{' '}
      </button>
    </AddTaskBox>
  );
};

export default AddTasks;
