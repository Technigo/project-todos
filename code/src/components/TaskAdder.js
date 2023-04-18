import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'
import uniqid from 'uniqid'

const StyledContainer = styled.div`
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
      <StyledButton text="Add task" onClick={handleSubmit} />
      <StyledInput value={todoText} onChange={(e) => setTodoText(e.target.value)} />
    </StyledContainer>
  );
}

export default TaskAdder;