import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Reducers
import { todos } from '../reducers/todos';

// Styling
import { TaskWrapper, CompletedTime } from '../styling/GlobalStyling';

// -----------------------------------------------------------------------------

export const CompletedTodo = ({ task, index }) => {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    return setChecked(false);
  }, [checked]);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
    dispatch(todos.actions.checkTodo(task));
  };

  return (
    <TaskWrapper>
      <CompletedTime>Completed at xxx</CompletedTime>
      <label htmlFor={index}>{task.task}</label>
      <p>{task.category}</p>
    </TaskWrapper>
  );
};
