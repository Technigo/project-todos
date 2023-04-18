import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString,
      text: inputValue.toUpperCase(),
      completed: false
    }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTask">
        Add your task here
          <input
            id="addTask"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue} />
        </label>
        <button type="submit">Add now</button>
      </form>
    </section>
  )
};

export default AddTask;