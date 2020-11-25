import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

// Reducers
import { todos } from '../reducers/todos';

// Styling
import { TaskWrapper, Button } from '../styling/GlobalStyling';

const TaskTextWrapper = styled.div`
  flex-grow: 2;
  margin-left: 20px;
`;

const TaskText = styled.label`
  font-size: 18px;
  /* text-transform: uppercase; */
  font-weight: bold;
  color: #4300ca;
`;

const CategoryText = styled.p`
  font-size: 10px;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: #4300ca;
`;

const TaskCheckbox = styled.input`
  margin: 0 10px;
`;

const RemoveTaskButton = styled(Button)`
  margin: 0 20px;
`;

const CompletedTime = styled.p`
  font-size: 10px;
  margin-top: 5px;
  text-transform: uppercase;
  opacity: 0.7;
`;

// -----------------------------------------------------------------------------

export const Todo = ({ task, index, prio }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleChecked = (event) => {
    setChecked(event.target.checked);
    dispatch(todos.actions.checkTodo(task));
  };

  const handleRemoveTask = () => {
    dispatch(todos.actions.removeTodo(task.id));
  };

  return (
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
      <div>
        <RemoveTaskButton onClick={handleRemoveTask}>✕</RemoveTaskButton>
        <TaskCheckbox
          type="checkbox"
          name="finished"
          id={index}
          checked={checked}
          onChange={handleChecked}
        />
      </div>
    </TaskWrapper>
  );
};
