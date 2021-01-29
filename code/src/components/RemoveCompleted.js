import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';

import { Emoji } from 'styles/textstyles';
import { Button } from 'styles/button';

export const RemoveCompleted = () => {
  const items = useSelector((store) => store.tasks.items.filter(item => item.complete));
  // Button only enabled if any tasks are completed
  const enabled = items.length > 0;

  const dispatch = useDispatch();

  const handleRemoveCompletedButton = () => {
    dispatch(tasks.actions.removeCompleted())
  }

  return (
    <Button onClick={handleRemoveCompletedButton} disabled={!enabled}>
      <Emoji role="img" aria-label="Bin">🗑</Emoji>
      Remove completed tasks!
    </Button>
  );
};
