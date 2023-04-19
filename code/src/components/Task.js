import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import CheckBox from './CheckBox'
import DeleteButton from './DeleteButton'

const StyledContainer = styled.div`
display: flex;
padding: 5px;
flex-direction: row;
align-items: center;
justify-content: space-around;
`

const StyledText = styled.p`
font-size: 12px;

&.completed {
    color: green;
    text-decoration: line-through;
}
`

const Task = ({ id }) => {
  const task = useSelector((state) => state.tasks.todos.find((t) => t.id === id))
  return (
    <StyledContainer>
      <CheckBox id={id} />
      <StyledText className={
        task.complete
          && 'completed'
      }>
        {task.text}
      </StyledText>
      <DeleteButton id={task.id} />
    </StyledContainer>
  );
}

export default Task;