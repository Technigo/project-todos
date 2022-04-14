import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
import uniqid from 'uniqid';

import todos from 'reducers/todos';

const AddTask = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const onAddSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: uniqid(),
      // text maybe wrong input?
      text: input,
      isComplete: false,
    };

    dispatch(todos.actions.addItem(newTask));

    setInput('');
  };

  return (
    <form onSubmit={onAddSubmit}>
      <label>
        New Task:&nbsp;
        <input
          type="text"
          value={input}
          placeholder="Add new task"
          onChange={(e) => setInput(e.target.value)}
          required
        />
      </label>
      <button onClick={onAddSubmit} type="submit">
        <span role="img" aria-label="add">
          ➕
        </span>
      </button>
    </form>
  );
};

export default AddTask;
