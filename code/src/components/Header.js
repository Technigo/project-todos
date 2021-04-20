import React from 'react';
import styled from 'styled-components';
import DayJS from 'react-dayjs';

import TaskSummary from './TaskSummary'

const Container = styled.div`
width: 250px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border: 2px solid blue;
margin: 10px;
`

const Header = () => {
  return (
    <Container>
      <div>
        <h1>To Do</h1>
        <DayJS format="YYYY-MM-DD H:mm"/>
      </div>
      <TaskSummary/>
    </Container>
  )
};

export default Header;

