import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'; 
import moment from 'moment';

import CompleteAllTodosButton from './CompleteAllTodosButton';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background: #e5e5e5;
  padding: 3vh;
`;

const Container = styled.div`
  background: transparent;
`;

const MainHeading = styled.h1`
  color: #303960;
  margin: 0;
`;

const Paragraph = styled.p`
  color: #303960;
  margin: 0;
`;

const Header = () => {
  const tasks = useSelector((store) => store.todos.tasks);

  // const completedTasks = tasks.filter(t => t.isComplete);   {completedTasks.length}  

  return (
    <HeaderContainer>
      <Container>
        <MainHeading>FRI</MainHeading>
        <Paragraph>{moment().format('MMM D YYYY')}</Paragraph>
      </Container>

      <Container>
        <Paragraph>{tasks.length} Todos</Paragraph>
        <CompleteAllTodosButton />
      </Container>
    </HeaderContainer>
  );
};

export default Header;