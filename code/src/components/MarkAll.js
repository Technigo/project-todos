import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';

import { Button, Emoji } from 'styles/GlobalStyles';

export const MarkAll = () => {
  const items = useSelector((store) => store.tasks.items);
  const enabled = items.length > 0;

  const dispatch = useDispatch();

  const handleMarkButton = () => {
    dispatch(tasks.actions.markAll())
  };

  return (
    <Button onClick={handleMarkButton} disabled={!enabled}>
      <Emoji role="img" aria-label="Bin">✔</Emoji> 
      Mark all tasks!
    </Button>
  );
};
