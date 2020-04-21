import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';

export const ClearButton = ({projectName}) => {
  const dispatch = useDispatch();

  const onClickedRemoved = () => {
    dispatch(todos.actions.removeAllTodos({
      projectName
    }));
  };

  return (
    <div>
      <button
        type='button'
        onClick={onClickedRemoved}
      >
        REMOVE PROJECT
      </button>
    </div>
  )
}