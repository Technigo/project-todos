import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';

export const AddNewTask = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const onTaskSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: inputText,
      isDone: false
    }
    dispatch(tasks.actions.addTask(newTask))
    setInputText('');
  }
  return (
    <form onSubmit={onTaskSubmit}>
      <label htmlFor="task-input">
        <input
          onChange={(event) => setInputText(event.target.value)}
          inputText={inputText}
          id="task-input"
          type="text"
          placeholder="Add task" />
      </label>
      <button type="submit" className="submit-button"> Add task</button>
    </form>
  )
}

