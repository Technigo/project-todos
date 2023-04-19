import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';

export const RemoveTask = ({ task }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(tasks.actions.removeTask(task.id));
  };

  return (
    <div>
      <span>{task.text}</span>
      <Button type="button" onClick={removeTask}>Remove</Button>
    </div>
  );
};
const Button = styled.button`
  background-color: #ff6464;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 10px;
  margin-left: 15px;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4d;
  }

  &:active {
    background-color: #ff3333;
  }
`;
