import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { tasks } from 'reducers/tasks';

import { CustomCheckbox } from './CustomCheckbox';

import { TaskText } from 'styles/styles';

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
      <LeftWrapper>
        <CustomCheckbox 
          isChecked={task.complete} 
          onChangeHandler={handleCheckboxClick}
        />
        <TaskText line={task.complete ? 'line-through' : null}>{task.category} {task.text}</TaskText>
      </LeftWrapper>
      <RightWrapper>
        <Date>Due: {moment(task.dueDate).format('MMM Do YYYY')}</Date>
        <RemoveButton 
          type="button" 
          onClick={handleRemoveButtonClick}>
            <Emoji role='img' aria-label='Bin'>🗑</Emoji>
        </RemoveButton>
      </RightWrapper>
    </List>
  );
};

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled.p`
  font-size: 10px;
  color: #8f8f8f;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Emoji = styled.span`
  font-size: 28px;
  color: #6e6e6e;

  &:hover {
    color: #000;
  }
`;