import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todoSlice from '../reducers/todoSlice';

import './Input.css';

export const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(todoSlice.actions.saveTodo(input));
    setInput('');
  };
  return (
    <div className="input" onSubmit={addTodo}>
      <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
      <button disabled={input === ''} onClick={addTodo}>Create</button>
    </div>
  );
};