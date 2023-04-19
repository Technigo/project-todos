import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components/macro'
import uniqid from 'uniqid'

const StyledContainer = styled.div`
padding: 5px;
display: flex;
flex-direction: column;
`

const StyledInput = styled.input`
`

const StyledButton = styled.button``

const TaskAdder = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(tasks.actions.addTask({ id: uniqid(), text: todoText, complete: false }))
  }

  return (
    <StyledContainer>
      <StyledInput value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <StyledButton text="Add task" onClick={handleSubmit} />
    </StyledContainer>
  );
}

export default TaskAdder;