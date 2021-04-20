import React from 'react';
import styled from 'styled-components';
import DayJS from 'react-dayjs';

const Container = styled.div`
width: 250px;
border: 2px solid blue;
margin: 10px;
`

const Header = () => {
  return (
    <Container>
      <h1>To Do</h1>
      <DayJS format="YYYY-MM-DD H:mm"/>
      <p>Task Summary component</p>
    </Container>
  )
};

export default Header;

