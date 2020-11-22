import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Reducers
import { todos } from '../reducers/todos';

// Styling
import { TaskWrapper } from '../styling/GlobalStyling';

// -----------------------------------------------------------------------------

export const Todo = ({ task, index }) => {
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
      <input
        type="checkbox"
        name="finished"
        id={index}
        checked={checked}
        onChange={handleChecked}
      />
      <label htmlFor={index}>{task.task}</label>
      {/* <TaskDragImage src="https://img.icons8.com/android/2x/menu.png" /> */}
      <p>{task.category}</p>
    </TaskWrapper>
  );
};
