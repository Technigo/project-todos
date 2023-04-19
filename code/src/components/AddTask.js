import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import tasks from 'reducers/tasks.js';

const AddTask = () => { // A function.
  const [inputValue, setInputValue] = useState(''); // State variable to track input.
  const dispatch = useDispatch(); // Create dispatch to be able to go to store/tasks.
  const onFormSubmit = (event) => {
    event.preventDefault(); // Otherwise form will reload.
    const newTask = {
      id: uuidv4(),
      name: inputValue.toUpperCase(), // Input value, sending it there.
      isDone: false
    };
    dispatch(tasks.actions.addTask(newTask)); // Dispatch = access store and select reducer/action.
    setInputValue('');
  }

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTask">
        Add new task here
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <button type="submit">Add new task</button>
      </form>
    </section>
  )
}

export default AddTask;