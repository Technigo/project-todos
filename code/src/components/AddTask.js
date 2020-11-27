import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';
import { ListItem, AddForm, NewTaskInput, AddButton } from '../styles/taskListStyles';

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
      <AddForm onSubmit={onAddTask}>
        <label htmlFor='newTask'>
        <img src={require('assets/plus.svg')} alt='' style={{width: '20px'}}/>
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
          value='Add'
        />
      </AddForm>
    </ListItem>
  )
}