import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const AddTask = () => {
  const [toDoText, setToDoText] = useState('');
  const dispatch = useDispatch();

  return (
    <form
      className="addTaskForm"
      onSubmit={event => {
        event.preventDefault();
        dispatch(tasks.actions.addTodo(toDoText));
        setToDoText('');
      }}
    >
      <input
        className="addTask"
        type="text"
        value={toDoText}
        onChange={event => setToDoText(event.target.value)}
        placeholder="Add new Todo"
      />
      <button className="addTaskBtn" type="submit">
        <i class="fas fa-plus"></i>
      </button>
    </form>
  );
};
