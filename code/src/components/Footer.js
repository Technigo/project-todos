import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from './Reducers/tasks';
import { EmptyState } from './EmptyState';

export const Footer = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.tasks.items);
  const RemoveAllTasks = () => {
    dispatch(tasks.actions.RemoveAllTasks({}));
  }

  return (
    <Wrapper>
      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          <RemoveAllBtn type="button" onClick={RemoveAllTasks}> Remove All Tasks</RemoveAllBtn>
          <p>You have {items.length} {items.length === 1 ? 'task' : 'tasks'} remaining</p>
        </div>)}
    </Wrapper>
  )
};

const Wrapper = styled.section`
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
p{
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
}

`
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
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #DDDBCB;
  }`