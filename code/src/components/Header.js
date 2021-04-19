import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 250px;
border: 2px solid blue;
margin: 10px;
`

const Header = () => {
  return (
    <Container>
      <h1>To Do</h1>
      <p>Today's Date</p>
      <p>Task Summary component</p>
    </Container>
  )
};

export default Header;

