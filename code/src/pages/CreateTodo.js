import React from 'react';
import { useDispatch } from 'react-redux';

import TodoInput from '../components/TodoInput';
import { Button } from '../library/Button';
import { todos } from '../reducers/todos';

const CreateTodo = () => {
  const dispatch = useDispatch();

  const handleGoBackClick = () => {
    dispatch(todos.actions.goToStartPage());
  };

  return (
    <div>
      <TodoInput />
      <Button
        onClick={() => handleGoBackClick()}
        type="button"
        className="go-back-button"
      >
        Go Back
      </Button>
    </div>
  );
};
export default CreateTodo;
