import React from 'react';
import styled from 'styled-components'; 
import moment from 'moment';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #e5e5e5;
  padding: 3vh;
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
  return (
    <HeaderContainer>
      <MainHeading>FRI</MainHeading>
      <Paragraph>{moment().format('MMM D YYYY')}</Paragraph>
    </HeaderContainer>
  );
};

export default Header;