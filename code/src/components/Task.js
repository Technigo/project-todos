import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { tasks } from 'reducers/tasks';

import { CustomCheckbox } from './CustomCheckbox';

import { TaskText, Emoji, SmallText } from 'styles/textstyles';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.markCompleted(task.id))
  };

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(task.id))
  };

  // Prints the date to be able to see if the task is due or not
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toJSON();

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
        {task.dueDate && (
          <SmallText>
            <span style={{ color: task.dueDate < formattedCurrentDate ? '#ba0713' : '#8f8f8f' }}>
              Due: {moment(task.dueDate).format('MMM Do YYYY')}
            </span>
          </SmallText>
        )}
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