import React from 'react';

import { useDispatch } from 'react-redux';

import TodoInput from '../components/TodoInput';
import Button from '../components/Button';
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
      text="Go back"
      type="button" 
      className="go-back-button"
      />
    </div>
  )
}
export default CreateTodo;