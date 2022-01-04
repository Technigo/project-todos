import React from 'react';
import styled from 'styled-components';
export const Header = () => {
  return (
    <HeaderStyle>
      <h1>Todo App</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  background-color: white;
  border: 5px dotted black;

  @media (min-width: 992px) {
    background-color: var(--main-color);
    padding: 30px;
    margin-bottom: 50px;
  }
`;
