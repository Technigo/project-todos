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
      isChecked: false
    };
    dispatch(todos.actions.addTodo(newTodo));
    setInputValue('');
  }
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="addNewTodo">
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="addNewTodo"
          type="text"
          placeholder="New task" />
      </label>
      <button type="submit">Add</button>
    </form>
  )
}