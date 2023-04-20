import React from 'react';
import styled from 'styled-components';
import todoImage from '../images/to-do.png'

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
  background-color: lightskyblue;
  padding: 16px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-height: 80px;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderImage = styled.img`
 max-width: 100%;
  max-height: 100%;
  object-fit: contain;

`

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage src={todoImage} alt="todolist" />
      <HeaderTitle>My kids Todos!
      </HeaderTitle>
      <HeaderImage src={todoImage} alt="todolist" />
    </HeaderContainer>
  );
};
