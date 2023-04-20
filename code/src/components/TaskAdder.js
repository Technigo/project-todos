import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components/macro'
import uniqid from 'uniqid'

const StyledContainer = styled.div`
padding: 5px;
display: flex;
flex-direction: row;
background-color: var(--foreground-primary-color);
`

const StyledInput = styled.input`
border: none;
height: 20px;
font-family: "Raleway";
`

const StyledButton = styled.button`
background-color: var(--foreground-primary-color);
font-weight: 400;
color: white;
border: none;
font-family: "Raleway";
font-size: 15px;
`

const TaskAdder = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(tasks.actions.addTask({ id: uniqid(), text: todoText, complete: false }))
  }

  return (
    <StyledContainer>
      <StyledInput value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <StyledButton onClick={handleSubmit}>task</StyledButton>
    </StyledContainer>
  );
}

export default TaskAdder;