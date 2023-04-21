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
          <button className="onTaskDeleteBtn" type="button" onClick={onTaskDeleteBtnClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
              <path fill="#C60012" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}

export default AddTask;
