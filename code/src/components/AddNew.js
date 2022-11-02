import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import toDos from 'reducers/todo';

const AddNew = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const newTask = {
    id: uniqid(),
    task: input,
    done: false
  };

  const handleFormSubit = (event) => {
    event.preventDefault();
    dispatch((toDos.actions.addTask(newTask)))
  };

  return (
    <form onSubmit={handleFormSubit}>
      <label htmlFor="newTask">
        <input
          id="newTask"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
      </label>
      <button type="submit">Add new task</button>
    </form>
  );
};

export default AddNew;