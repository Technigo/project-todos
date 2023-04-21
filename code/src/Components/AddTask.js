// /////////////// IMPORTS //////////////////////// //

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Tasks } from 'Reducers/Tasks';
import moment from 'moment';
import './AddTask.css';

// /////////////// COMPONENT //////////////////////// //

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch();
  const maxCharacters = 29;
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      isChecked: false,
      message: inputValue.charAt(0).toUpperCase() + inputValue.substring(1),
      time: moment().format('D/M HH:mm')
    };
    dispatch(Tasks.actions.addTask(newTask));
    setInputValue('');
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