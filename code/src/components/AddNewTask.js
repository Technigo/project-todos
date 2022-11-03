/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const AddNewTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault(); /* Have the store in the same state during one session. no releod */
    const newTask = { id: Date.now().toString(),
      text: inputValue,
      complete: false }
    dispatch(tasks.actions.addItem(newTask));
    setInputValue('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        new Task:
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      </label>
      <button type="submit">Add task</button>
    </form>
  )
}

export default AddNewTask;

