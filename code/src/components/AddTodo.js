import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid'

import todos from 'reducers/todo';
import { StyleP } from './Header';

const AddTodo = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const onAddTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uniqid(),
      name: inputText,
      isDone: false
    }
    dispatch(todos.actions.addTask(newTodo));
    setInputText('');
  };

  return (
    <form onSubmit={onAddTodo}>
      <label htmlFor="text">
        <StyleP>Create new</StyleP>
        <input
          type="text"
          value={inputText}
          required
          onChange={(event) => setInputText(event.target.value)} />
      </label>
      <button type="submit">Done</button>
    </form>
  );
};

export default AddTodo;