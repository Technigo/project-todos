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
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;
const HeaderImage = styled.img`
width: 20%;
max-width: 80px;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage src={todoImage} alt="todolist" />
      <HeaderTitle>My kids <br /> Todo-List!
      </HeaderTitle>
      <HeaderImage src={todoImage} alt="todolist" />
    </HeaderContainer>
  );
};
