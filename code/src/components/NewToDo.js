import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid';
import { tasks } from 'reducers/tasks'

export const NewToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      id: uniqid(),
      text: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      complete: false
    };
    dispatch(tasks.actions.addItem(newToDo));
    dispatch(tasks.actions.sortItems());
    setInputValue('');
    // https://www.random.org/
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newtask">
        <input
          type="text"
          name="newtask"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <button
        type="submit">
          add task
      </button>
    </form>
  )
}