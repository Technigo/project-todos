import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import './AddTask.css';

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
      <button className="addTaskBtn" type="submit">
        <i class="fas fa-plus"></i>
      </button>
      <input
        className="addTask"
        type="text"
        value={toDoText}
        onChange={event => setToDoText(event.target.value)}
        placeholder="Add new Todo"
      />
    </form>
  );
};
