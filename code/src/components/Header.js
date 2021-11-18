import React from 'react'
import styled from 'styled-components/macro'

const StyledHeader = styled.h1`
  color: var(--brown);
  text-align: center;
  margin: 50px 0 50px 0;
`

const Header = () => <StyledHeader>What do you want to achieve today?</StyledHeader>


export default Header
