import React from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';

export const DoneButton = ({ task }) => {
  const dispatch = useDispatch();

  const onItemDone = () => {
    dispatch(todos.actions.toggleDone(task.id))
  };
  

  if (task.done === true) {
    return (
      <button onClick={onItemDone}>
        ✔
      </button>
    ) 
  } else {
      return (
        <button onClick={onItemDone}>
          ⚪
        </button>
      )
  } 
};