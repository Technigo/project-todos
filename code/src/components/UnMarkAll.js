import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { tasks } from 'reducers/tasks';

import { Button } from 'styles/GlobalStyles';

export const unMarkAll = () => {
  const items = useSelector((store) => store.tasks.items);
  const enabled = items.length > 0;

  const dispatch = useDispatch();

  const handleUnMarkButton = () => {
    dispatch(tasks.actions.unMarkAll())
  };

  return (
    <Button onClick={handleUnMarkButton} disabled={!enabled}>
      <Emoji role="img" aria-label="Bin">✔</Emoji> 
      Unmark all tasks!
    </Button>
  );
};

