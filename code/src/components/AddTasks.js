import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import tasks from 'reducers/tasks';

const AddTaskBox = styled.div`
  background-color: rgb(154,202,248, 0.6);
  width: ${(props) => props.wid * 0.76}px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom-left-radius: 10px;


  @media (min-width: 1366px) {
    width: ${(props) => props.wid * 0.5}px;
  }

  input {
    width: 80%;
    font-size: 1.5em;
    border-radius: 10px;
    color: rgb(53, 56, 75);
  }

  button {
    background: transparent;
    border: none;
  }
`;

const AddSpan = styled.p`
  opacity: 0.8;
  font-size: 1.5em;
  cursor: pointer;
  transition: transform 0.3s ease 0s;

  &:hover {
    transform: rotate(1080deg);
    filter: invert(1);
  }
`;

const AddTasks = ({ hgt, wid }) => {
  const [input, setInput] = useState('');

  const onSetInput = (e) => {
    setInput(e.target.value);
  };

  const dispatch = useDispatch();

  const onAddTask = () => {
    dispatch(tasks.actions.addTask(input));
    setInput('');
  };

  //   const onEnter = (e) => {
  //
  //     if (e.key === 'Enter') {
  //		onAddTask();
  //     }
  //   };

  return (
    <AddTaskBox hgt={hgt} wid={wid}>
      <input
        type='text'
        value={input}
        onChange={onSetInput}
        onKeyDown={(e) => e.key === 'Enter' && onAddTask()}
      />
      <button disabled={!input} onClick={onAddTask}>
        {' '}
        <AddSpan>
          <span role='img' aria-label='img'>➕</span>
        </AddSpan>{' '}
      </button>
    </AddTaskBox>
  );
};

export default AddTasks;
