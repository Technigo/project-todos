import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components'

const StyledNewTaskWrapper = styled.section`
display: flex; 
justify-content: center; 
border: 2px solid red;
margin-bottom: 20px;  
`
const AddTaskBtn = styled.button`
padding: 20px; 
background: #FEC946; 
border-radius: 10px; 
border: none; 
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
      <form onSubmit={onTaskSubmit}>
        <label htmlFor="task-input">
          <input
            value={inputValue}
            onChange={(event) => setinputValue(event.target.value)}
            id="addTaskInput"
            type="text"
            placeholder="Add task" />
        </label>
        <AddTaskBtn type="submit" className="submit-button"> Add it!</AddTaskBtn>
      </form>
    </StyledNewTaskWrapper>
  )
}

