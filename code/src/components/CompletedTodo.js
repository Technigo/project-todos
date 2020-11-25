import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

// Reducers
import { todos } from '../reducers/todos';

// Styling
import { TaskWrapper, Button } from '../styling/GlobalStyling';

// -----------------------------------------------------------------------------

export const CompletedTodo = ({ task, index }) => {
  const dispatch = useDispatch();

  const handleRemoveTaskButton = () => {
    dispatch(todos.actions.removeTodo(task.id));
  };

  // Reusing the same action as when to check a task,
  // since it reverses the isComplete - value
  const handleCheckedButton = () => {
    dispatch(todos.actions.checkTodo(task));
  };

  return (
    <CompletedTaskWrapper>
      <div>
        <CompletedTaskText>{task.task}</CompletedTaskText>
        <CompletedTime>
          Completed {moment(task.completedAt).startOf('second').fromNow()}
        </CompletedTime>
      </div>
      <div>
        <RemoveTaskButton onClick={handleRemoveTaskButton}>✕</RemoveTaskButton>
        <CheckedButton onClick={handleCheckedButton}>↩︎</CheckedButton>
      </div>
    </CompletedTaskWrapper>
  );
};

// Local styling ----------------------------------------------------------------
const CompletedTaskWrapper = styled(TaskWrapper)`
  background: #f5f1fc;
`;

const CompletedTime = styled.p`
  font-size: 10px;
  font-style: italic;
  margin: 0;
  opacity: 0.5;
  margin-left: 10px;
`;

const TaskText = styled.label`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;

const CompletedTaskText = styled(TaskText)`
  font-size: 16px;
  text-transform: none;
  text-decoration: line-through;
  margin-left: 10px;
`;

const CheckedButton = styled(Button)`
  background: #4300ca;
  color: #fff;
  margin: 0 10px;
  transform: rotate(90deg);
`;

const RemoveTaskButton = styled(Button)`
  background: #fff;
`;
