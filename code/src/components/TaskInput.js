/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { TaskListWrapper } from 'styles/GlobalStyles';
import moment from 'moment';

export const TaskInput = () => {
  // useState to set new tasks
  const [inputValue, setInputValue] = useState('');
  // useDispatch to add new task to list
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    // Prevent page from reloading
    event.preventDefault();
    // Creating a new task as an object
    const newTask = {
      id: Date.now().toString(),
      text: inputValue,
      complete: false,
      created: moment().format('ll'),
    };
    console.log(newTask);
    dispatch(tasks.actions.addTask(newTask));
    // Clear input
    setInputValue('');
  };

  return (
    <TaskListWrapper>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="a">
          <input
            type="text"
            value={inputValue}
            required
            placeholder="Add task"
            maxLength="100"
            onChange={(event) => setInputValue(event.target.value)}
          />
        </label>
        <button type="submit">+</button>
      </form>
    </TaskListWrapper>
  );
};

export default TaskInput;
