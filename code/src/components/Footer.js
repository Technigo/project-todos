import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from './Reducers/tasks';

export const Footer = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.tasks.items);
  const RemoveAllTasks = () => {
    dispatch(tasks.actions.RemoveAllTasks({}));
  }

  return (
    <div>
      <RemoveAllBtn type="button" onClick={RemoveAllTasks}> Remove All Tasks</RemoveAllBtn>
      <p>You have {items.length} {items.length === 1 ? 'task' : 'tasks'} remaining</p>
    </div>
  )
};

const RemoveAllBtn = styled.button`
  font-family: 'Dongle', sans-serif;
  font-size: 1.5rem;
  background-color: ${({ clicked }) => (clicked ? '#DDDBCB' : '#FFFFFF')};
  color: black;
  border: none;
  width:50vw;
  padding:0px 10px; 
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #DDDBCB;
  }`