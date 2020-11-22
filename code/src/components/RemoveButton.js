import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../library/Button';
import { todos } from '../reducers/todos';

const RemoveButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      type="button"
      onClick={() => dispatch(todos.actions.removeAllTodos())}
    >
      Remove all
    </Button>
  );
};

export default RemoveButton;
