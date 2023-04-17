import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newTask } from 'reducers/newTask'

export const NewToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newToDo = {
      task: inputValue,
      isComplete: false
    };

    dispatch(newTask.actions.addItem(newToDo));
    setInputValue('');
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