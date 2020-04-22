import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import { AddButtonWhite } from '../lib/Buttons';
import { ProjectInput } from 'lib/Containers';
import { InputTitle } from 'lib/Texts';
import { ProjectForm } from 'lib/Containers';

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
    <ProjectForm onSubmit={handleOnSubmit}>
      <label>
        <InputTitle>Create a new project:</InputTitle> 
        <ProjectInput 
          type='text'
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
          placeholder='Todo list name'
        ></ProjectInput >
      </label>  
      <label>
        <AddButtonWhite
          type='submit'
          value='+'
        ></AddButtonWhite>
      </label>
    </ProjectForm>
  )
};

