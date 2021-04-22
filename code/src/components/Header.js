import React from 'react'
import styled from 'styled-components'

import Counter from './Counter'

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo
          src={'/assets/laptop-closing3.gif'}>
        </Logo>
        <Heading>
          My to-do list
        </Heading>
      </HeaderContainer>
      <CounterContainer>
        <Counter />
      </CounterContainer>
    </>
  )
}

const HeaderContainer = styled.div`
  width: 100vw;
  display: flex; 
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 47%, rgba(181,211,251,1) 100%);
  background-repeat: no-repeat;
`;

const Logo = styled.img`
  width: 50px;
  align-self: center;
  margin-top: 10px;
`;

const Heading = styled.h1`
  font-size: 20px; 
  text-transform: uppercase;
  color: #216dff;
`;

const CounterContainer = styled(HeaderContainer)`
`;

export default Header

