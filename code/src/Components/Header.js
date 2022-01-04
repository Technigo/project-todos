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
  border: 5px dotted black;
  background-color: var(--main-color);
  margin-bottom: 20px;

  h1 {
    font-size: 1em;
    padding: 10px;
  }

  @media (min-width: 992px) {
    padding: 30px;
    margin-bottom: 50px;

    h1 {
      font-size: 2em;
      padding: 10px;
    }
  }
`;
