import React from 'react';
import { OuterWrapper, Container } from 'styles/GlobalStyles';
import styled from 'styled-components'
import TaskCounter from './TaskCounter';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TaskPage = () => {
  return (
    <OuterWrapper>
      <Container>
        <StyledH1>What to do?</StyledH1>
        <TaskCounter />
        <TaskInput />
        <TaskList />
      </Container>
    </OuterWrapper>
  )
}

export default TaskPage

const StyledH1 = styled.h1`
  font-family: "Julius Sans One";
  font-size: 2.2em;
  font-weight: 100;
 
  @media screen and (min-width: 667px) {
    transform: scale(1.4);
  }
`