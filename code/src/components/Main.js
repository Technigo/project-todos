import React from 'react';
import styled from 'styled-components/macro';
import ContentContainer from './content/ContentContainer';
import { contentAppear } from './GlobalStyles';

const Main = () => {
  return (
    <MainStyle>
      <ContentContainer />
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.main`
  opacity: 1;
  z-index: 2;
  background-color: white;
  width: 80%;
  height: 80%;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 8px #12121261;

  animation: ${contentAppear} 4s;
  transform: scale(1);

  @media (min-width: 1024px) {
    width: 60%;
    max-width: 1000px;
  }
`;
