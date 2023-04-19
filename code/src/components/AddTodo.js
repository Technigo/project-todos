import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid'

import todos from 'reducers/todo';

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
        Add to BucketList
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