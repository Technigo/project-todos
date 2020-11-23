import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { tasks } from 'reducers/tasks';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.markCompleted(task.id))
  };

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(task.id))
  };

  return (
    <List>
      <CheckboxContainer>
        <Checkbox
          type='checkbox'
          checked={task.complete}
          onChange={handleCheckboxClick}
        />
      </CheckboxContainer>
      <TheTask>{task.category} {task.text}</TheTask>
      <RemoveButton 
        type="button" 
        onClick={handleRemoveButtonClick}>
          <Emoji role='img' aria-label='Bin'>🗑</Emoji>
      </RemoveButton>
    </List>
  );
};

const List = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CheckboxContainer = styled.label``

const Checkbox = styled.input`
  margin-right: 6px;
`

const TheTask = styled.p`
  font-size: 14px;
  width: 100%;
`

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const Emoji = styled.span`
  font-size: 28px;
  color: #6e6e6e;
`