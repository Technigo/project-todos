import React from 'react';
import styled from 'styled-components/macro';
import { textColor } from 'components/GlobalStyles';
import angel from '../../Assets/cat/angel.png';
import TaskList from './TaskList';

const ContentContainer = () => {
  return (
    <ContentContainerStyled>
      <img src={angel} alt="cat at peace" />
      <h1>You have no tasks</h1>
      <TaskList />
    </ContentContainerStyled>
  );
};

const ContentContainerStyled = styled.div`
  display: flex;
  /* width: 100%; */
  /* height: 100%; */
  padding-top: 10%;
  color: ${textColor};

  flex-direction: column;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
  }

  @media (min-width: 1024px) {
    padding-top: 50px;
  }
`;

export default ContentContainer;
