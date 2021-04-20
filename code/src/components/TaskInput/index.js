import React, { useState } from 'react';
import { Paper, InputAdornment, Input, Button } from '@material-ui/core';
import { CheckCircleOutline, Add } from '@material-ui/icons';
import { useStyles } from './style';

export default () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleAddTask = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      // TODO: dispatch addItem action
      // dispatch(addItem(value))
      console.log(value);
    }
  };

  return (
    <Paper component="form" className={classes.root}>
      <Input
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
