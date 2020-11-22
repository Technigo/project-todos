import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos.js';

// Receives listId as input
export const TodoInput = () => {
  const dispatch = useDispatch();

  // State for input from text box
  const [inputValue, setInputValue] = useState('');

  // Create handle submit function to dispatch addTodo
  const handleOnSubmit = (event) => {
    event.preventDefault();
      console.log(inputValue)

    // This is where we will dispatch the action to save the new todo item
    // The 'actions' are the names of the reducers we have defined. First 'actions'
    // and then name of reducer.
    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        done: false
      })
    );
    

    // Clear text field after saved and component re-renders
    setInputValue('');
  };

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
          className='todo-input-button'
          value='Add Todo'
        ></input>
        

      </form>
    );
};