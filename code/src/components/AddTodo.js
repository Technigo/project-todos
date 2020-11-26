import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';

import { todos } from '../Reducers/todos';
import { AddTodoForm, NewTodo, TodoText, AddButton } from './StyledComponents/AddTodoStyling';

export const AddTodo = () => { 
  const dispatch = useDispatch();
  const [addTodo, setAddTodo] = useState('');

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(
      todos.actions.addTodo(
        {
          id: Date.now(),
          text: addTodo,
          complete:false,
        }
      )
    );
    setAddTodo ('');
  };

  // adds users input to the to-do list by pushing (push()) data into the array, defined in the
  //todos.js reducer
  return (
    <AddTodoForm onSubmit={handleSubmit}>
      <NewTodo>
      <TodoText 
        type='text' required
        value={addTodo}
        placeholder='Add a to-do!'
        onChange={(event)=> setAddTodo(event.target.value)}
      />
        <AddButton type='submit' disabled={ addTodo.length < 5 }> + </AddButton>
      </NewTodo>
    </AddTodoForm>
  );
};