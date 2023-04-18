import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onSubmitAddTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isDone: false,
      createdAt: new Date().toISOString()
    }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }

  return (
    <section>
      <form onSubmit={onSubmitAddTask}>
        <label htmlFor="addTaskInput">
            Add new task
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" id="addTaskInput" />
        </label>
        <button type="submit">➕</button>
      </form>
    </section>
  )
}