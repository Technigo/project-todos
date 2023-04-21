// /////////////// IMPORTS //////////////////////// //

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Tasks } from 'Reducers/Tasks';
import moment from 'moment';
import './AddTask.css';

// /////////////// COMPONENT //////////////////////// //

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('') // Initial value of the input field. When field is changed, the value gets stored.
  const dispatch = useDispatch(); // Here we use the dispatch function to dispatch actions.
  const maxCharacters = 29; // Max amount of characters allowed in the input field.
  const onFormSubmit = (event) => { // Here we use the onFormSubmit function to add a new task.
    event.preventDefault();
    const newTask = { // And we say what we want to post in the new task.
      id: Date.now().toString(), // Here we use the Date.now() function to generate a unique ID.
      isChecked: false, // This is a boolean value and we set it to false = unchecked.
      message: inputValue.charAt(0).toUpperCase() + inputValue.substring(1), // 1stletter UpperCased
      time: moment().format('D/M HH:mm') // This is the current time.
    };
    dispatch(Tasks.actions.addTask(newTask)); // We dispatch function to add a new task.
    setInputValue(''); // We reset the input field.
  }

  // /////////////// OUTCOME //////////////////////// //

  return (
    <section>
      <p className="character-counter" aria-label="Max amount of characters is 29"> {inputValue.length} / {maxCharacters}</p>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
          <div className="input">
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} id="addTaskInput" type="text" placeholder="Write a to-do.." required />
            <button className="add-button" type="submit" disabled={inputValue.length > maxCharacters}><img alt="Post here" src="./Images/post-add.svg" /></button>
          </div>
        </label>
      </form>
    </section>
  )
}