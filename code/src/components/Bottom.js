import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BottomContainer } from '../styles/bottomStyles';
import { todos } from '../reducers/todos';

export const Bottom = () => {
  const allTasks = useSelector((store) => store.todos.tasks);
  const dispatch = useDispatch();

  const onMarkAllDone = () => {
    dispatch(todos.actions.markAllDone())
  };

  const onClearList = () => {
    dispatch(todos.actions.clearList())
  }

  return(
    <BottomContainer>
      <button 
        onClick={onMarkAllDone}
        disabled={allTasks.length === 0 ? true : false}
      >Mark all as done
      </button>
      <button 
        onClick={onClearList}
        disabled={allTasks.length === 0 ? true : false}
      >Clear list
      </button>
    </BottomContainer>
  )
}