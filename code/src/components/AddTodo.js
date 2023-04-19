/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

export const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      task: inputValue,
      isDone: false
    };
    dispatch(todos.actions.addTodo(newTodo));
    setInputValue('');
  }
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="task-input">Add a new task here:
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="task-input"
          type="text"
          placeholder="Press Enter"
          required />
      </label>
    </form>
  )
}