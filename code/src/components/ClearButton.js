import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';

export const ClearButton = () => {
  const dispatch = useDispatch();

  const onClickedRemoved = () => {
    dispatch(todos.actions.removeAllTodos());
  };

  return (
    <div>
      <button
        type='button'
        onClick={onClickedRemoved}
      >
        CLEAR ALL
      </button>
    </div>
  )
}