/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/todos';

export const NewToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  // prevents everything from reloading when submitting new task
  const onFormSubmit = (event) => {
    event.preventDefault();

    // Adds the new task to the array and then removes the input after being submitted
    const newTodo = { id: Date.now().toString(),
      text: inputValue,
      isDone: false }
    dispatch(tasks.actions.addItem(newTodo))
    setInputValue('')
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="input">
          <input type="text" value={inputValue} placeholder="Add new task..." onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <button type="submit" disabled={inputValue.length === 0}> Add </button>
      </form>
    </div>
  )
}