import React from 'react';
import { useDispatch } from 'react-redux';
//import Button from './Button';
import { Button } from '../lib/Button';
import { todos } from '../reducers/todos';


const RemoveAll = () => {
  const dispatch = useDispatch();

  return (
      <Button 
      type="button"
      //text="Delete all todos"
      onClick={() => dispatch(todos.actions.removeAllTodos())}
      >
        <p>Delete all todos</p>
      </Button>
  )
}
export default RemoveAll;