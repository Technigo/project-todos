import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const Header = () => {
  const totalTask = useSelector((store) => store.tasks.items.length)
  const completedTasks = useSelector((store) => store.tasks.completedCount)
  const tasksleft = totalTask - completedTasks
  console.log(completedTasks)
  return (
    <HeaderSection>
      <h1>To do list!</h1>
      <div>
        <p>Completed: {completedTasks} of {totalTask}</p>
        <p>Tasks left: {tasksleft}</p>
      </div>
    </HeaderSection>
  )
}

const HeaderSection = styled.header`
display: flex;
flex-direction: column;
gap: 5px;
padding: 4%;
align-items: center;
`