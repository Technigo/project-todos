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
      isCompleted: false,
      creationTime: Date.now()
    };
    dispatch(uncompleted.actions.addTask(newTask));
    setInputValue('');
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="add">Add a new task
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <button type="submit">➕</button>
      </form>
    </section>
  )
}