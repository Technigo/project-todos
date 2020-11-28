import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/';

import { tasks } from 'reducers/tasks';
import { Button } from 'lib/Button';
import { Emoji } from 'lib/Emoji';

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
  justify-self: left;
`;

const TaskText = styled.p`
  margin: 0;
  color: ${props => props.completed ? "#dcd7e1" : ""};
  text-decoration-line: ${props => props.completed ? "line-through" : ""};
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
      <Button
        type="button"
        background="none"
        onClick={handleRemoveButtonClick}
      >
        <Emoji ariaLabel="Delete task">🗑</Emoji>
      </Button>
    </TaskContainer>
  )
}