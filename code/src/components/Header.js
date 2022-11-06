import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <h1>Todo List</h1>
    </Container>
  )
}

export default Header;

const Container = styled.div`
width: 100vw;
font-size: xx-large;
display: flex;
justify-content: center;
align-items: center;
`;