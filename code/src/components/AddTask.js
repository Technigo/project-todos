/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const AddTask = () => {
  const allTasks = useSelector((store) => store.tasks.items);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: Date.now().toString(),
      text: inputValue,
      taskDone: false }
    dispatch(tasks.actions.addItem(newTask))
    setInputValue('')
    localStorage.setItem('allTasks', JSON.stringify(allTasks))
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
            New Task:
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      </label>
      <button type="submit"> Add Task </button>
    </form>
  )
}

