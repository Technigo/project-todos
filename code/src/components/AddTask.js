import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uncompleted from 'reducers/uncompleted';
import { v4 as uuid } from 'uuid';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    // Creates new unique task-item and dispatches it
    const newTask = {
      id: uuid(),
      text: inputValue,
      isCompleted: false
    };
    dispatch(uncompleted.actions.addTask(newTask));
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="add">Add new task
          <input
            onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <button type="submit">➕</button>
      </form>
    </section>
  )
}