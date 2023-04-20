import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import tasks from 'reducers/tasks.js';
// import styled from 'styled-components';

// Object.defineProperty(String.prototype, 'capitalize', {
//   value: () => {
//     return this.charAt(0).toUpperCase() + this.slice(1);
//   },
//   enumerable: false
// });

const capitalize = (stringToCapitalize) => {
  return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
}

const AddTask = () => { // A function.
  const [inputValue, setInputValue] = useState(''); // State variable to track input. Set to 0.

  const dispatch = useDispatch(); // Create/declare dispatch to be able to go to store/tasks.

  const onFormSubmit = (event) => {
    event.preventDefault(); // Otherwise form will reload.
    const newTask = {
      id: uuidv4(), // Date.now().toString()
      name: capitalize(inputValue), // Method, then input value, sending it there.
      isCompleted: false // Not completed yet
    }
    dispatch(tasks.actions.addTask(newTask)); // Dispatch an action. Dispatch = access store
    // and select reducer/action. Referencing the imported reducer "task".
    setInputValue(''); // Empty string for user to not have to delete previous input.
  };

  const onDeleteAllTaskBtnClick = () => { // Function.
    // Here create what happens at onCLick. Copy dispatch from onFormSubmit above.
    dispatch(tasks.actions.deleteAllTask()); // Choose ? as declared? in tasksjs reducer.
    // Leave ? empty since no action is happening.
  }
  // Add this function to onClickEvent below.
  // Here comes the html part.
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTask">
          <input type="text" placeholder="Add new task here" value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" />
        </label>
        <button type="submit">Add new task</button>
      </form>
      <button type="button" onClick={onDeleteAllTaskBtnClick}> Delete all tasks </button>
    </section>
  )
}

export default AddTask;

// value={inputValue} in input to clear field.
// Add functionalities before ?