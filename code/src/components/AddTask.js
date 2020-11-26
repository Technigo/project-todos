import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';

export const AddTask = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onAddTask = (event) => {
    dispatch(todos.actions.addItem(value));
    setValue('');
    event.preventDefault();
  }

  return (
    <form onSubmit={onAddTask}>
      <label htmlFor='newTask'>➕
      </label>
      <input 
        type='text' 
        id='newTask'
        value={value}
        onChange={event => setValue(event.target.value)}
        />
      <input 
        type='submit' 
        value='Add'
      />
    </form>
  )
}