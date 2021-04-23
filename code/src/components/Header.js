import React from 'react';
import styled from 'styled-components';
import DayJS from 'react-dayjs';

import TaskSummary from './TaskSummary'

const Container = styled.div`
width: 100%;
padding: 30px 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
background-color: #F4F4F4;
border-radius: 15px;
`
const DateContainer = styled.div`
margin-left: 7px;
display: flex;
flex-direction: column;
font-family: 'Noto Sans KR', sans-serif;
`
const Header1 = styled.h1`
margin: 0;
font-family: 'Rammetto One', cursive;
color: white;
background-color: #364547;
padding: 5px;
border-radius: 14px;
`


const Header = () => {
  return (
    <Container>
      <div>
        <Header1>ToDo</Header1>
        <DateContainer>
          <DayJS format="YYYY-MM-DD"/>
          <DayJS format="HH:mm"/>
        </DateContainer>
        
      </div>
      <TaskSummary/>
    </Container>
  )
};

export default Header;

