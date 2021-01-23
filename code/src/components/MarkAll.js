import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';

import { Button, Emoji } from 'styles/GlobalStyles';

// This component is not used right now due to problems with the customized checkboxes, 
// I will keep the component to see if I have time to fix it later on

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
