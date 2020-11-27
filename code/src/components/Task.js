import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/'

import { tasks } from 'reducers/tasks'

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  border-bottom: 1px solid #dcd7e1;
`;

const CompleteButton = styled.input`
  width: 20px;
  height: 20px;
  justify-self: center;
`;

const TaskText = styled.p`
  margin: 0;
  color: ${props => props.completed ? "#dcd7e1" : ""};
  text-decoration-line: ${props => props.completed ? "line-through" : ""};
`;

const RemoveButton = styled.button`
  font-size: 16px;
  justify-self: end;
  width: fit-content;
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
      <RemoveButton
        type="button"
        onClick={handleRemoveButtonClick}
      >
        Remove
      </RemoveButton>
    </TaskContainer>
  )
}