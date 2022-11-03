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
    dispatch((toDos.actions.addTask(newTask)));
    setInput('');
  };

  return (
    <form onSubmit={handleFormSubit}>
      <button type="submit">+</button>
      <label htmlFor="newTask">
        <input
          id="newTask"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Add task" />
      </label>
    </form>
  );
};

export default AddNew;