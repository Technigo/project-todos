import React from 'react'
import styled from 'styled-components/'

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  background: #f4f4f4;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Tasks = styled.div`
  font-size: 16px;
  text-align: end;
`;

const Date = styled.div`
  font-size: 16px;
`;

const DeleteButton = styled.button`
  font-size: 16px;
  justify-self: end;
  width: fit-content;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Todo</Title>
      <Tasks>x tasks</Tasks>
      <Date>Today</Date>
      <DeleteButton>Clear</DeleteButton>
    </HeaderContainer>
  )
} 