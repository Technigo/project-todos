import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import tasks from '../reducers/tasks';
import './AddTask.css';

const AddTask = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const onAddTask = () => {
    dispatch(tasks.actions.addTask(input));
  };
  const cleanInput = () => {
    setInput('');
  };

  return (
    <div className='form-container'>
      {/* A form to control form elements and then pass the values into actions
      upon submitting. */}
      <span className='input-span'>
        <button
          className='task-button'
          onClick={() => {
            onAddTask();
            cleanInput();
          }}
        >
          +
        </button>
        <input
          className='form-input'
          type='text'
          value={input}
          placeholder={'Add a crazy task'}
          onChange={(event) => setInput(event.target.value)}
        />
      </span>
    </div>
  );
};

export default AddTask;
