import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { TextField, Paper, Grid, IconButton } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import uniqid from 'uniqid';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: uniqid(),
      text: inputValue.toLowerCase(),
      completed: false
    }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  };

  return (
    <Paper elevation={4} style={{ margin: '20px', padding: '20px', opacity: '0.9' }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid xs={10} md={11} item>
          <TextField
            id="standard-basic"
            variant="standard"
            color="secondary"
            fullWidth
            label="What's next?"
            placeholder="Add your todo here"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue} />
        </Grid>
        <Grid xs={2} md={1} item>
          <IconButton
            onClick={onSubmit}
            disabled={inputValue.length < 1}
            type="submit">
            <AddCircle fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
};

export default AddTask;