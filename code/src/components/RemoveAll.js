import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { todos } from '../reducers/todos';


const RemoveAll = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button 
      type="button"
      text="Delete all todos"
      onClick={() => dispatch(todos.actions.removeAllTodos())}
      />
    </div>
  )
}
export default RemoveAll;