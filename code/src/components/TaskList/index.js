import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import Task from 'components/Task';
import { useStyles } from './style';

export default () => {
  const classes = useStyles();
  const tasks = useSelector((state) => state.tasks.list)
  return (
    <Container className={classes.root}>
      {tasks.map((task) => <Task key={task.id} {...task} />)}
    </Container>
  );
};
