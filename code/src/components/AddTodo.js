/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todo';

export const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Date.now().toString(),
      createdAt: Date.now(),
      text: inputValue,
      isDone: false
    };
    dispatch(todos.actions.addItem(newTodo));
    setInputValue('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        <p>New Task:</p>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <button type="submit" disabled={inputValue.length === 0}>
        ADD
      </button>
    </form>
  );
};
