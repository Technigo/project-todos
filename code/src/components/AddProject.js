import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import { AddButtonWhite } from '../lib/Buttons';
import { ProjectInput, ProjectForm } from 'lib/Containers';
import { InputTitle } from 'lib/Texts';
import swal from 'sweetalert';

export const AddProject = () => {
  const [inputValue, setInputValue] = useState('');
  const todo = useSelector(store => store.todos);
  const dispatch = useDispatch();

  const handleOnSubmit = event => {
    event.preventDefault();
    if (Object.keys(todo).includes(inputValue)) {
      swal({
        title: "There is already a project with this name",
        text: "Please select a new name!",
        icon: "warning",
      })
      setInputValue('');
    } else {

      dispatch(
        todos.actions.addProject({
          inputValue
        })
      );
      setInputValue('');
    }
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

