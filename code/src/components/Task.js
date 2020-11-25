import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { tasks } from 'reducers/tasks';

import { CustomCheckbox } from './CustomCheckbox';

import { TaskText, Emoji, SmallText } from 'styles/styles';

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
      <Wrapper>
        <CustomCheckbox 
          isChecked={task.complete} 
          onChangeHandler={handleCheckboxClick}
        />
        <TaskText line={task.complete ? 'line-through' : null}>{task.category} {task.text}</TaskText>
      </Wrapper>
      <Wrapper>
      <SmallText>Due: {moment(task.dueDate).format('MMM Do YYYY')}</SmallText>
        <RemoveButton 
          type="button" 
          onClick={handleRemoveButtonClick}>
            <Emoji role='img' aria-label='Bin'>🗑</Emoji>
        </RemoveButton>
      </Wrapper>
    </List>
  );
};

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;