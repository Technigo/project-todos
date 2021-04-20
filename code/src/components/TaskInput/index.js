import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Paper, InputAdornment, Input, Button } from '@material-ui/core';
import { CheckCircleOutline, Add } from '@material-ui/icons';
import { addTask } from 'store/tasks'
import { useStyles } from './style';

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleAddTask = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      dispatch(addTask(value));
      setValue('');
    }
  };

  return (
    <Paper component="form" className={classes.root}>
      <Input
        value={value}
        className={classes.input}
        placeholder="Add task"
        type="text"
        disableUnderline
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleAddTask}
        startAdornment={
          <InputAdornment position="start" className={classes.inputIcon}>
            {focused ? <CheckCircleOutline /> : <Add />}
          </InputAdornment>
        } />
      <Button
        variant="contained"
        color="primary"
        type="click"
        onClick={handleAddTask}>
          Add
      </Button>
    </Paper>
  );
};
