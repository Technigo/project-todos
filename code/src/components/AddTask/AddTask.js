import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import tasks from '../../reducers/tasks';
import './AddTask.css';

const AddTask = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const onAddTask = (e) => {
    if (input.trim() !== '') {
      dispatch(tasks.actions.addTask(input));
      setInput('');
    }
    e.preventDefault();
  };
  const cleanInput = () => {
    setInput('');
  };

  return (
    <div className='form-container'>
      {/* A form to control form elements and then pass the values into actions
      after submitting. */}
      <span className='input-span'>
        <button
          className='task-button'
          onClick={(e) => {
            onAddTask(e);
            cleanInput();
          }}
        >
          +
        </button>
        <form onSubmit={onAddTask}>
          <input
            className='form-input'
            type='text'
            value={input}
            placeholder={'Add a crazy task'}
            onChange={(event) => setInput(event.target.value)}
          />
        </form>
      </span>
    </div>
  );
};

export default AddTask;
