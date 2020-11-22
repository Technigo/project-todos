import React from 'react';

import { useDispatch } from 'react-redux';

import TodoInput from '../components/TodoInput';
//import Button from '../components/Button';
import { Button } from '../lib/Button'
import { todos } from '../reducers/todos';

const CreateTodo = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(todos.actions.navHomePage())
  }

  return (
    <div>
      <TodoInput /> 
      <Button 
        onClick = {() => handleClick()}
        type="button" 
        className="go-back-button"
      >
        Go Back
      </Button>
    </div>
  )
}
export default CreateTodo;