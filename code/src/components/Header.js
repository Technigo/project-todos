import React from 'react';
import styled from 'styled-components'; 
import moment from 'moment';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  padding: 3vh;
  border-bottom: solid 2px #e5e5e5;
`;

const MainHeading = styled.h1`
  color: #303960;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 38px;
  }
  
  @media (min-width: 1200px) {
    font-size: 46px;
  }
`;

const Paragraph = styled.p`
  color: #303960;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }
  
  @media (min-width: 1200px) {
    font-size: 28px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeading>FRI</MainHeading>
      <Paragraph>{moment().format('MMM D YYYY')}</Paragraph>
    </HeaderContainer>
  );
};

export default Header;