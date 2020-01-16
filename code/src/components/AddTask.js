import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const AddTask = () => {
  const [toDoText, setToDoText] = useState('');
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        dispatch(tasks.actions.addTodo(toDoText));
        setToDoText('');
      }}
    >
      <input
        type="text"
        value={toDoText}
        onChange={event => setToDoText(event.target.value)}
        placeholder="Your Todo"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
