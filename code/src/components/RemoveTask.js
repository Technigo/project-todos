import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';
import minusImg from '../images/minus.png'

export const RemoveTask = ({ task }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(tasks.actions.removeTask(task.id));
  };

  return (
    <div>
      <span>{task.text}</span>
      <Img src={minusImg} alt="Remove task" onClick={removeTask} />
    </div>
  );
};

const Img = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  cursor: pointer;
`;

