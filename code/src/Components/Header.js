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
  background-color: white;
  border: 5px dotted black;
`;
