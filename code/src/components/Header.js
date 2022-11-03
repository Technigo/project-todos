import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>todo</h1>
    </HeaderContainer>
  )
}

export default Header

// Styled Components. Mobile first.
const HeaderContainer = styled.header`
  background-color: pink;
  height: 25vh;
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 60px;
    margin: 0;
    height: 50%;
    width: 40%;
    margin-left: 20px;
  }
`;

