/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { textColor } from 'components/GlobalStyles';

import TaskList from './TaskList';
import Cat from './Cat';
import NewTask from './NewTask';

const ContentContainer = () => {
  const taskListLength = useSelector((store) => store.tasks.tasks.length);
  const headerText =
    taskListLength === 0
      ? 'You have no tasks'
      : `You have ${taskListLength} ${
          taskListLength === 1 ? 'task' : 'tasks'
        } `;

  const bottomRef = useRef(null);

  return (
    <ContentContainerStyled>
      <Cat />
      <h1>{headerText}</h1>
      <TaskList bottomRef={bottomRef} />
      <NewTask bottomRef={bottomRef} />
    </ContentContainerStyled>
  );
};

const ContentContainerStyled = styled.div`
  display: flex;
  height: 100%;
  color: ${textColor};
  flex-direction: column;
  align-items: center;
`;

export default ContentContainer;
