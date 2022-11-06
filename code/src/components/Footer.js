import React from 'react'
import styled from 'styled-components'
import { ClearListButton } from './ClearListButton'
import Summary from './Summary'

const Footer = () => {
  return (
    <StyledFooter>
      <Summary />
      <ClearListButton />
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    padding: 5%;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
`;
