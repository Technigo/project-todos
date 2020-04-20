import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';


export const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleOnSubmit = event => {
    event.preventDefault();
    
    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        done: false
      })
    );

    setInputValue('');
  }

  return (
    <form className='todo-input' onSubmit={handleOnSubmit}>
      <input 
        type='text'
        onChange={event => setInputValue(event.target.value)}
        value={inputValue}
        className='todo-input-text'
      ></input>
      <input
        type='submit'
        value='Add Todo'
        className='todo-input-button'
      ></input>
    </form>
  )
};