import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Todo</h1>
    </HeaderContainer>
  )
}

export default Header

// Styled Components. Mobile first.
const HeaderContainer = styled.header`
  background: linear-gradient(#FA9284, #E06C78);
  height: 25vh;
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 60px;
    height: 50%;
    width: 40%;
    margin-left: 5%;

    @media (min-width: 1024px) { 
      font-size: 70px; 
    }
  }
`;

