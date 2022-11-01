import React from 'react';
import styled from 'styled-components/macro';
import ContentContainer from './content/ContentContainer';

const Main = () => {
  return (
    <MainStyle className="content-container">
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

  @media (min-width: 1024px) {
    width: 60%;
    max-width: 1000px;
  }
  // TODO: import animations from CSS here
`;
