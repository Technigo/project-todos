import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { TextField, Button, Paper, Grid } from '@mui/material';

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
    <Paper style={{ margin: '20px', padding: '20px' }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid xs={10} md={11} item>
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            onSubmit={onFormSubmit}
            label="Add your task here"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue} />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            variant="outlined"
            color="secondary"
            type="submit">
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
};

export default AddTask;