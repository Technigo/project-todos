import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

// Reducers
import { todos } from '../reducers/todos';

// Components
import { CustomCheckbox } from '../components/CustomCheckbox';

// Styling
import {
  InnerFlexWrapper,
  TaskWrapper,
  Button,
} from '../styling/GlobalStyling';

// -----------------------------------------------------------------------------

export const Todo = ({ task, index, prio }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  // Set task to completed
  const handleChecked = (event) => {
    setChecked(event.target.checked);
    dispatch(todos.actions.checkTodo(task));
  };

  const handleRemoveTask = () => {
    dispatch(todos.actions.removeTodo(task.id));
  };

  return (
    // Set border to purple if task is prioritized
    <TaskWrapper important={prio === true ? 'important' : ''}>
      <TaskTextWrapper>
        <CategoryText>{task.category}/</CategoryText>
        <TaskText htmlFor={index}>
          {task.prio === true ? (
            <span role="img" aria-label="important">
              🔥
            </span>
          ) : (
            ''
          )}{' '}
          {task.task}
        </TaskText>
        <CompletedTime>
          Created {moment(task.createdAt).startOf('second').fromNow()}
        </CompletedTime>
      </TaskTextWrapper>
      <ButtonWrapper>
        <RemoveTaskButton onClick={handleRemoveTask}>✕</RemoveTaskButton>

        <CustomCheckbox
          isChecked={checked}
          onChangeHandler={(event) => handleChecked(event)}
        />
      </ButtonWrapper>
    </TaskWrapper>
  );
};

// Local styles -----------------------------
const TaskTextWrapper = styled.div`
  flex-grow: 2;
  margin-left: 20px;
`;

const TaskText = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #4300ca;
`;

const CategoryText = styled.p`
  font-size: 10px;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: #4300ca;
`;

const RemoveTaskButton = styled(Button)`
  margin: 0 10px;
  &:hover {
    background: #4300ca;
    color: #fff;
  }
`;

const CompletedTime = styled.p`
  font-size: 10px;
  margin-top: 5px;
  text-transform: uppercase;
  opacity: 0.7;
`;

const ButtonWrapper = styled(InnerFlexWrapper)`
  align-content: center;
  margin-right: 10px;
`;
