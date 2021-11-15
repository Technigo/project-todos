import React, { useState } from 'react';
import './Input.css';

import { useDispatch } from 'react-redux';
import todoSlice from '../reducers/todoSlice';

export const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodo = (event) => {
    event.preventDefault();
    console.log(`Adding ${input}`);
    if (input) {
      return dispatch(
        todoSlice.actions.saveTodo({
          item: input,
          done: false,
          id: Date.now(),
        })
      );
    }
  };
  return (
    <form className="input" onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add todo.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
