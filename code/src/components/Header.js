import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Task List</h1>
      <h2>{moment().format('ll')}</h2>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 50px;
  }
`