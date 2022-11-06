/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/task';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: Date.now().toString(),
      name: inputValue,
      isCaught: false }
    dispatch(tasks.actions.addItem(newTask))
    setInputValue('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        New Task:
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)} />
      </label>
      <button type="submit">Add Task!</button>
    </form>
  )
}

export default AddTask;