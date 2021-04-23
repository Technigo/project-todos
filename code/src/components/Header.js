import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Counter from './Counter'
import ZeroTodos from './ZeroTodos'

const Header = () => {
  const allTodos = useSelector((store) => store.todos.items.length)

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
      <CounterAndZeroContainer>
      {allTodos === 0 ? <ZeroTodos /> : <Counter /> }
      </CounterAndZeroContainer>
    </>
  )
}

const HeaderContainer = styled.div`
  width: 100vw;
  display: flex; 
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

const Logo = styled.img`
  width: 50px;
  align-self: center;
  margin-top: 10px;
`;

const Heading = styled.h1`
  font-size: 21px; 
  text-transform: uppercase;
  color: #4d8aff;
`;

const CounterAndZeroContainer = styled(HeaderContainer)`
`;

export default Header

