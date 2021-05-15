import React from 'react';
import styled from 'styled-components';

import UnfinishedTasksCounter from './UnfinishedTasksCounter';
import CompleteAllTasksButton from './CompleteAllTasksButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: flex-end;
`;

const TaskSummary = () => {

  return (
    <Container>
      <UnfinishedTasksCounter/>
      <CompleteAllTasksButton/>
    </Container> 
  )
}
export default TaskSummary;