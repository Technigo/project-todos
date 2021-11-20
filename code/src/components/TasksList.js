import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';

import DeleteTask from './DeleteTask';

import tasks from 'reducers/tasks';
import styled from 'styled-components';

const TaskCard = styled.section`
  background: rgb(255, 231, 231);
  font-family: 'Itim', cursive;
  word-wrap: break-word;
  overflow-y: scroll;
  height: ${(props) => props.hgt * 0.8}px;
  height: 60vh;
  border-top-left-radius: 10px;
  font-size: 1.3em;
  width: ${(props) => props.wid * 0.9}px;
  color: rgb(53, 56, 75);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  button {
    border: none;
    background: transparent;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    width: 60vw;
    text-align: left;
    align-items: stretch;
  }

  p {
    overflow-wrap: break-word;
  }

  .checkbox {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: black;
    width: 2em;
    height: 2em;
    border: 0.15em solid #edac5f;
    border-radius: 1em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }
  .checkbox::before {
    content: '';
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #edac5f;
  }
  .checkbox:checked::before {
    transform: scale(1);
  }

  .time {
    font-size: 0.6em;
  }

  .task-box {
    border-bottom: 4px double rgb(168, 218, 220, 0.8);
  }

  &.empty {
    background-color: rgb(248, 150, 216, 0.7);
    background-image: url('https://media.giphy.com/media/xT8qBwdHOt79erD2qQ/giphy.gif');
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (min-width: 768px) {
    width: ${(props) => props.wid * 0.8}px;
  }

  @media (min-width: 1366px) {
    width: ${(props) => props.wid * 0.5}px;
  }
`;

const TasksList = () => {
  const [width, height] = useWindowSize();
  let [checked, setChecked] = useState(false);

  const items = useSelector((store) =>
    store.tasks.items.filter((item) => item.complete === false)
  );

  checked = items.complete;

  const dispatch = useDispatch();

  const onToggleCheck = (id) => {
    dispatch(tasks.actions.toggleCheck(id));
  };

  const onSetChecked = () => {
    setChecked(!checked);
  };

  const onCheckComplete = (id) => {
    onSetChecked();
    setTimeout(() => onToggleCheck(id), 2000);
  };

  return (
    <TaskCard className={items.length <= 0 && 'empty'} hgt={height} wid={width}>
      {items.map((item) => (
        <div className='task-box' key={item.id}>
          <input
            className='checkbox'
            type='checkbox'
            checked={checked}
            onChange={() => onCheckComplete(item.id)}
          />
          <div className='text-box'>
            <p>{item.text}</p>
            <p className='time'>{item.timestamp}</p>
          </div>
          <DeleteTask item={item.id} />
        </div>
      ))}
    </TaskCard>
  );
};

export default TasksList;
