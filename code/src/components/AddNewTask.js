/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components'

const StyledNewTaskWrapper = styled.section`
display: flex; 
justify-content: center; 
margin-bottom: 20px;  
`
const AddTaskBtn = styled.button`
font-family: 'Mouse Memoirs', sans-serif;
font-size: 20px;
padding: 30px; 
background: #FAAB1C; 
border-radius: 50%; 
border: none; 

&:hover {
box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
transform: scale(1);
animation: pulse 2s infinite;

@keyframes pulse {
0% {
transform: scale(1.2);
box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
}

70% {
transform: scale(1);
box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
}
100% {
transform: scale(1.2);
box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
}
}
`
const StyledForm = styled.form`
display: flex; 
gap: 20px; 
align-items: center;
`
const StyledInput = styled.input`
padding: 20px; 
border: none; 
border-radius: 20px; 
`

export const AddNewTask = () => {
  const [inputValue, setinputValue] = useState('');
  const dispatch = useDispatch();

  const onTaskSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue,
      checked: false
    }
    dispatch(tasks.actions.addTask(newTask))
    setinputValue('');
  };
  return (
    <StyledNewTaskWrapper>
      <StyledForm onSubmit={onTaskSubmit}>
        <label htmlFor="task-input">
          <StyledInput
            value={inputValue}
            onChange={(event) => setinputValue(event.target.value)}
            id="addTaskInput"
            type="text" />
        </label>
        <AddTaskBtn type="submit" className="submit-button"> Add it!</AddTaskBtn>
      </StyledForm>
    </StyledNewTaskWrapper>
  )
}

