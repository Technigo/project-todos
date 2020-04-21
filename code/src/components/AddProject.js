import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';


export const AddProject = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleOnSubmit = event => {
    event.preventDefault();
    
    dispatch(
      todos.actions.addProject({
        inputValue
      })
    );

    setInputValue('');
  }

  return (
    <form className='todo-input' onSubmit={handleOnSubmit}>
      <label>
        <input 
          type='text'
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
        ></input>
      </label>  
      <label>
        <input
          type='submit'
          value='Add Todo'
        ></input>
      </label>
    </form>
  )
};