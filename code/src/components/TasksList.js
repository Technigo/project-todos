import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';

import AddTasks from './AddTasks';
import DeleteTask from './DeleteTask';

import tasks from 'reducers/tasks';
import styled from 'styled-components';

const TaskCard = styled.section`
  background: rgb(255, 231, 231);
  height: ${(props) => props.hgt * 0.8}px;
  width: ${(props) => props.wid * 0.9}px;

  @media (min-width: 768px) {
    width: ${(props) => props.wid * 0.8}px;
  }

  @media (min-width: 1366px) {
    width: ${(props) => props.wid * 0.5}px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  span {
    display: inline;
    height: 0.5em;
    width: 0.5em;
    font-size: 1em;
  }

  button {
    border: none;
    background: transparent;
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

  &.empty {
    background-color: yellow;
    background-image: url('https://media.giphy.com/media/13d2jHlSlxklVe/giphy.gif');
    background-repeat: no-repeat;
    background-position: center;
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
        <div key={item.id}>
          <input
            className='checkbox'
            type='checkbox'
            checked={checked}
            onChange={() => onCheckComplete(item.id)}
          />
          <p>{item.text}</p>
          <p>{item.timestamp}</p>
          <DeleteTask item={item.id} />
        </div>
      ))}
      <AddTasks hgt={height} wid={width} />
    </TaskCard>
  );
};

export default TasksList;
