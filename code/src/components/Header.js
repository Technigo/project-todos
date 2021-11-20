import React from 'react'
import styled from 'styled-components/macro'

const StyledHeader = styled.h1`
  color: var(--brown);
  text-align: center;
  margin: 50px 0 50px 0;
  max-width: 400px;

  @media (min-width: 667px) {
    font-size: 36px;
  }
`

const Header = () => <StyledHeader>What do you want to achieve today?</StyledHeader>


export default Header
