import React from 'react';
import styled from 'styled-components';
export const Header = () => {
  return (
    <HeaderStyle>
      <h1>Hedvigs Header</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  border: 5px dotted black;
  h1 {
    text-align: center;
  }
`;
