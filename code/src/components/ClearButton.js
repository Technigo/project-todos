import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import { DeleteButton } from '../lib/Buttons'

export const ClearButton = ({projectName}) => {
  const dispatch = useDispatch();

  const onClickedRemoved = () => {
    dispatch(todos.actions.removeAllTodos({
      projectName
    }));
  };

  return (
    <div>
      <DeleteButton
        type='button'
        onClick={onClickedRemoved}
      >
        DELETE PROJECT
      </DeleteButton>
    </div>
  )
}