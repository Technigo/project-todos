import React from 'react';
import { useDispatch } from 'react-redux';

import { BottomContainer } from '../styles/bottomStyles';
import { todos } from '../reducers/todos';

export const Bottom = () => {
  const dispatch = useDispatch();

  const onMarkAllDone = () => {
    dispatch(todos.actions.markAllDone())
  };

  const onClearList = () => {
    dispatch(todos.actions.clearList())
  }

  return(
    <BottomContainer>
      <button onClick={onMarkAllDone}>Mark all as done</button>
      <button onClick={onClearList}>Clear list</button>
    </BottomContainer>
  )
}