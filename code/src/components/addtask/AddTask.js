import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      task: inputValue,
      complete: false
    };
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">Add your next task:
          <input id="addTaskInput" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </section>
  )
}