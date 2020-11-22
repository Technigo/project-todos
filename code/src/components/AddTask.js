import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const AddTask = () => {
  const [text, addTask] = useState('');
  const [category, setCategory] = useState('')

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask({ text, category }))
    addTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New task:
        <input
          type='text'
          value={text}
          onChange={(event) => addTask(event.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value='school'>School</option>
          <option value='private'>Private</option>
        </select>
      </label>

      <button type='submit'>Add task</button>
    </form>
  );
};