import React from 'react';
import { Container } from '@material-ui/core';
import Task from 'components/Task';
import { useStyles } from './style';

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {/* TODO: map Task comp. from tasks.list */}
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </Container>
  );
};
