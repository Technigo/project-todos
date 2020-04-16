import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos.js';

export const ToDoInput = ({ itemId }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  // will send, dispatch, the info of new task to the store
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(
      todos.actions.addTodo({
        itemId: itemId,
        itemInfo: { text: inputValue, complete: false },
      })
    );

    // Reset value
    setInputValue('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type='text'
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      ></input>
      <input type='submit' value='Add todo'></input>
    </form>
  );
};
