import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import Task from 'components/Task';
import { useStyles } from './style';

export default () => {
  const classes = useStyles();
  const { slug } = useParams();
  const [complListOpen, setComplListOpen] = useState(false);
  const currentList = useSelector((store) => {
    const listname = !slug ? 'my-day' : slug;
    return store.tasks.lists.find((list) => list.slug === listname);
  });
  const uncomplTasks = currentList.tasks.filter((t) => !t.complete);
  const complTasks = currentList.tasks.filter((t) => t.complete);

  return (
    <Container className={classes.root}>
      {uncomplTasks.map((task) => (
        <Task key={task.id} {...task} listSlug={currentList.slug} />
      ))}
      {complTasks.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setComplListOpen(!complListOpen)}>
          Complete
          {complListOpen ? <ArrowDropDown /> : <ArrowDropUp />}
          {complTasks.length}
        </Button>
      )}
      {complListOpen
        && complTasks.map((task) => (
          <Task key={task.id} {...task} listSlug={currentList.slug} />
        ))}
    </Container>
  );
};
