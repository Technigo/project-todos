/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import './Input.css';
import addImg from '../assets/add-square-svgrepo-com.svg';

// Add id npm package for new tasks id
const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      text: inputValue,
      complete: false
    };
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  };
  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <label htmlFor="addTask">
          Add new task
          <input
            type="text"
            value={inputValue}
            id="addTask"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            placeholder="Your next big idea!"
          />
        </label>
        <button type="submit" disabled={inputValue.length < 1}>
          {/* <img src={addImg} alt="add new todo" /> */}
          ADD
        </button>
      </form>
    </div>
  );
};

export default Input;
