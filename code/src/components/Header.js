import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Todays todo list!</HeaderText>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.header`
height: 25vh;
overflow: hidden;
background-position: center;
background-color: #eee6dd;

@media (min-width: 667px) and (max-width: 1024px) {
  height: 40vh;
}
@media (min-width: 1025px) {
  min-height: 400px;
}
`

const HeaderText = styled.h1`
font-size: 40px;
color: #936f63;
text-align: center;
`