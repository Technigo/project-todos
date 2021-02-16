import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';
import { AddForm, NewTaskInput, AddButton } from '../styles/taskListStyles';

export const AddTask = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onAddTask = (event) => {
    dispatch(todos.actions.addItem(value));
    setValue('');
    event.preventDefault();
  };

  return (
      <AddForm onSubmit={onAddTask}>
        <label htmlFor='newTask'>
          <img src={require('assets/plus.svg')} alt='plus symbol' style={{width: '20px'}}/>
        </label>
        <NewTaskInput 
          type='text' 
          id='newTask'
          placeholder={'Add task'}
          value={value}
          onChange={event => setValue(event.target.value)}
          required
        />
        <AddButton 
          type='submit' 
          role= 'button'
          value='Add'
        />
      </AddForm>
  )
};
