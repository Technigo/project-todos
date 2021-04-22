import React from 'react'
import styled from 'styled-components'

import todos from '../reducers/todos'
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

const HeaderContainer = styled.header`
  display: flex; 
  justify-content: center;
  align-items: center; 
  flex-direction: column; 
`;

const Logo = styled.img`
  width: 50px;
  align-self: center;
  margin-top: 10px;
  z-index: 2;
`;

const Heading = styled.h1`
  font-size: 20px; 
  text-transform: uppercase;
  color: #deacff;
`;

const CounterContainer = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center; 
`;

export default Header

