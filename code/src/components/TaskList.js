import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Task from './Task'

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;`

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  return (
    <StyledContainer><h1>Tasklist</h1>
      {tasks.map((task) => (
        <Task id={task.id} key={task.id} />))}
    </StyledContainer>);
}

export default TaskList;