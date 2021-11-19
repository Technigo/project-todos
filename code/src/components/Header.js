import React from 'react';
import styled from 'styled-components';
import { NoOfTasks } from './NoOfTasks';

const HeaderContainer = styled.header`
  background: lightgrey;
  display: flex;
  padding: 1rem;
  flex-direction: row;
  justify-content: space-between;
`

const TitleDate = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
font-family: Arial, Helvetica, sans-serif;
font-size: medium;
font-weight:lighter;
margin: 0px;
padding: 2px;
`
const Date = styled.h2`
font-family: Arial, Helvetica, sans-serif;
font-size: small;
font-weight:lighter;
margin: 0px;
padding: 2px;
`

const TaskClearAll = styled.section`
  display: flex;
  flex-direction: column;
`;

const NoOfTasksContainer = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size: small;
font-weight: lighter;
margin: 1px;
padding: 2px;
`
const ClearButton = styled.button `
border-radius: 10px;
background-color: #3d34eb;
color: white;
border: 2px solid #3d34eb;
`
const Header = () => (
  <HeaderContainer>
    <TitleDate>
        <Title>Todo</Title>
        <Date>Todays date</Date>
    </TitleDate>
    <TaskClearAll>
        <NoOfTasksContainer><NoOfTasks></NoOfTasks></NoOfTasksContainer>
        <ClearButton>CLEAR ALL</ClearButton>
    </TaskClearAll>
  </HeaderContainer>
);

export default Header
