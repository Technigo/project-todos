import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { tasks } from '../reducers/tasks';

export const AddTask = () => {
  const [input, setInput] = useState(' ');
  const dispatch = useDispatch();

  const onAddTask = () => {
    dispatch(tasks.actions.addTask(input))
    setInput('')
  };

  return (
    <>
      <TaskInput>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
      </TaskInput>
      <button type="submit" onClick={onAddTask}>+</button>
    </>
  )
};

const TaskInput = styled.section`
    background-color: red;
`