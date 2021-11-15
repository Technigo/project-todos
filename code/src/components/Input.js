import React, { useState } from 'react';
import './Input.css';

import { useDispatch } from 'react-redux';
import saveTodo from '../reducers/todoSlice'
// import todoSlice from '../reducers/todoSlice';

export const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch()

  const addTodo = (event) => {
      event.preventDefault();
      console.log(`Adding ${input}`)
      dispatch(saveTodo({
          item: input, 
          done: false,
          id: Date.now()
      }))
  };
  return (
    <form className="input" onSubmit={addTodo}>
      <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
