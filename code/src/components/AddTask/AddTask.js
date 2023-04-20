import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import './AddTask.css';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: capitalizeFirstLetter(inputValue),
      isDone: false
    };
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }
  const onTaskDeleteBtnClick = () => {
    dispatch(tasks.actions.deleteAllTask());
  }
  return (
    <section>
      <button type="button" onClick={onTaskDeleteBtnClick}>DELETE ALL</button>
      <div className="addtask-container">
        <button type="submit" className="add-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        </button>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="addTaskInput">
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
          </label>
        </form>
      </div>
    </section>
  )
}

export default AddTask;
