import React from 'react'
import styled from 'styled-components/'

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  padding: 20px 20px 30px 20px;
  font-size: 20px;
  border-bottom: 1px solid #dcd7e1;
`;

const CompleteButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const TaskText = styled.p`
  margin: 0;
`;

export const Task = () => {
  return (
    <TaskContainer>
      <CompleteButton></CompleteButton>
      <TaskText>Test task</TaskText>
    </TaskContainer>
  )
}