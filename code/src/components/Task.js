import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import DeleteButton from './DeleteButton'
import { tasks } from '../reducers/tasks'

const StyledContainer = styled.div`
display: flex;
padding: 5px;
flex-direction: row;
align-items: center;
justify-content: space-around;
`

const StyledText = styled.p`
font-weight: 400;
font-size: 15px;
color: var(--foreground-primary-color);
flex: 1;
text-align: center;
transition: color 0.1s ease-out;

&.completed {
    color: var(--background-color);;
}
`

const Task = ({ id }) => {
  const dispatch = useDispatch();
  const checkComplete = () => {
    dispatch(tasks.actions.completeTask(id))
  }
  const task = useSelector((state) => state.tasks.todos.find((t) => t.id === id))
  return (
    <StyledContainer onClick={checkComplete}>

      <StyledText className={
        task.complete
          && 'completed'
      }>
        {task.text}
      </StyledText>
      <DeleteButton id={task.id} completed={task.complete} />
    </StyledContainer>
  );
}

export default Task;