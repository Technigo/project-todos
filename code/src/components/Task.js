import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/';

import { tasks } from 'reducers/tasks';
import { Trash } from 'components/Trash';

const TaskContainer = styled.li`
  display: grid;
  grid-template-columns: 30px 1fr 80px 30px;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dcd7e1;
`;

const CompleteButton = styled.input`
  margin: 0;  
  width: 16px;
  height: 16px;
  justify-self: start;
  border-radius: 50%;
`;

const TaskText = styled.p`
  margin: 0;
  color: ${props => props.completed ? "#dcd7e1" : ""};
  text-decoration-line: ${props => props.completed ? "line-through" : ""};
`;

const DeleteButton = styled.button`
  justify-self: end;
  margin: 0;
  padding: 5px;
  background: none;
  border: none;
  border-radius: 6px;
  height: 30px;
  
  &:hover {
    background: black;
    color: white;
    }
`;

export const Task = ({ item }) => {
  const dispatch = useDispatch()

  const handleCheckBoxClick = () => {
    dispatch(tasks.actions.toggleCompleted(item.id))
  };

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItem(item.id))
  };

  return (
    <TaskContainer>
      <CompleteButton
        type="checkbox"
        checked={item.completed}
        onChange={handleCheckBoxClick}
      >
      </CompleteButton>
      <TaskText completed={item.completed}>{item.description}</TaskText>
      <div>{item.priority}</div>
      <DeleteButton
        type="button"
        background="none"
        onClick={handleRemoveButtonClick}
      >
        <Trash />
      </DeleteButton>
    </TaskContainer>
  )
}