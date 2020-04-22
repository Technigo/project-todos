import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import { TodoForm } from 'lib/Containers';
import { TodoInputContainer } from 'lib/Containers';
import { TodoInput } from 'lib/Containers';
import { AddButtonColor } from '../lib/Buttons';

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
    <TodoForm onSubmit={handleOnSubmit}>
      <TodoInputContainer>
        <label>
          <TodoInput 
            type='text'
            onChange={event => setInputValueDescription(event.target.value)}
            value={inputValueDescription}
            placeholder='Add a task'
          ></TodoInput>
        </label>
        <label>
          <TodoInput
            type='date'
            onChange={event => setInputValueDate(event.target.value)}
            value={inputValueDate}
          ></TodoInput>
        </label>
      </TodoInputContainer>
      <label>
        <AddButtonColor
          type='submit'
          value='+'
        ></AddButtonColor>
      </label>
    </TodoForm>
  )
};