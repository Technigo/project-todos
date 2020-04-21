import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';


export const AddTodo = ({projectName}) => {
  const [inputValueDescription, setInputValueDescription] = useState('');
  const [inputValueDate, setInputValueDate] = useState('');
  const dispatch = useDispatch();

  const handleOnSubmit = event => {
    event.preventDefault();
    
    dispatch(
      todos.actions.addTodo({
        projectName,
        itemInfo: {
          description: inputValueDescription,
          date: inputValueDate,
          done: false
        }
      })
    );

    setInputValueDescription('');
    setInputValueDate('');
  }

  return (
    <form className='todo-input' onSubmit={handleOnSubmit}>
      <label>
        <input 
          type='text'
          onChange={event => setInputValueDescription(event.target.value)}
          value={inputValueDescription}
          className='todo-input-text'
        ></input>
      </label>
      <label>
        <input
          type='date'
          onChange={event => setInputValueDate(event.target.value)}
          value={inputValueDate}
        ></input>
      </label>
      <label>
        <input
          type='submit'
          value='Add Todo'
          className='todo-input-button'
        ></input>
      </label>
    </form>
  )
};