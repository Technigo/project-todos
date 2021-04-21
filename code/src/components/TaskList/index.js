import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Button } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import Task from 'components/Task';
import { useStyles } from './style';

export default () => {
  const classes = useStyles();
  const [complListOpen, setComplListOpen] = useState(false);
  const uncomplTasks = useSelector((state) => state.tasks.list.filter((t) => !t.complete));
  const complTasks = useSelector((state) => state.tasks.list.filter((t) => t.complete));

  return (
    <Container className={classes.root}>
      {uncomplTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setComplListOpen(!complListOpen)}>
        Complete
        {complListOpen ? <ArrowDropDown /> : <ArrowDropUp />}
        {complTasks.length}
      </Button>
      {complListOpen && complTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </Container>
  );
};
