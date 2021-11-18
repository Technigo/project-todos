import React from 'react';
import styled from 'styled-components';

import CompleteAllTask from './ClearAllTask';

const HeaderBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(123, 104, 238);
  color: white;
`;

const Header = () => {
  return (
    <HeaderBox>
      <h1>TASKER</h1>
      <CompleteAllTask />
    </HeaderBox>
  );
};

export default Header;
