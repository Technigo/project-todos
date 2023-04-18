import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { TextField, Button } from '@mui/material';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString,
      text: inputValue.toUpperCase(),
      completed: false
    }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <TextField
          placeholder="Add your task here"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue} />
        <Button variant="outlined" type="submit">Add now</Button>
      </form>
    </section>
  )
};

export default AddTask;