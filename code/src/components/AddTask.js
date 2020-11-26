import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';
import { ListItem } from '../styles/taskListStyles';

export const AddTask = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onAddTask = (event) => {
    dispatch(todos.actions.addItem(value));
    setValue('');
    event.preventDefault();
  }

  return (
    <ListItem>
      <form onSubmit={onAddTask}>
        <label htmlFor='newTask'>
        <img src={require('assets/plus.svg')} alt='' style={{width: '20px'}}/>
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
    </ListItem>
  )
}