import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';


export const AddTodo = () => {
  const [inputValueDescription, setInputValueDescription] = useState('');
  const [inputValueDate, setInputValueDate] = useState('');
  const dispatch = useDispatch();

  const handleOnSubmit = event => {
    event.preventDefault();
    
    dispatch(
      todos.actions.addTodo({
        description: inputValueDescription,
        date: inputValueDate,
        done: false
      })
    );

    setInputValueDescription('');
    setInputValueDate('');
  }

  return (
    <form className='todo-input' onSubmit={handleOnSubmit}>
      <input 
        type='text'
        onChange={event => setInputValueDescription(event.target.value)}
        value={inputValueDescription}
        className='todo-input-text'
      ></input>
      <input
        type='date'
        onChange={event => setInputValueDate(event.target.value)}
        value={inputValueDate}
      ></input>
      <input
        type='submit'
        value='Add Todo'
        className='todo-input-button'
      ></input>
    </form>
  )
};