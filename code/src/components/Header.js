import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'; 
import moment from 'moment';

import CompleteAllTasksButton from './CompleteAllTasksButton';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background: grey;
  padding: 3vh;
`;

const Container = styled.div`
  background: transparent;
`;

const MainHeading = styled.h1`
  color: white;
  margin: 0;
`;

const Paragraph = styled.p`
  color: white;
  margin: 0;
`;


const Header = () => {
  const tasks = useSelector((store) => store.todos.tasks);

  const completedTasks = tasks.filter(t => t.isComplete);

  return (
    <HeaderContainer>
      <Container>
        <MainHeading>TODO</MainHeading>
        <Paragraph>{moment().format('YYYY-MM-DD')}</Paragraph>
      </Container>

      <Container>
        <Paragraph>Completed: {completedTasks.length} / {tasks.length}</Paragraph>
        <CompleteAllTasksButton />
      </Container>
    </HeaderContainer>
  );
};

export default Header;