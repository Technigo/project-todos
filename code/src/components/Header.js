import React from 'react'
import { CustomCheckbox } from 'components/CustomCheckbox'
import styled from 'styled-components'

export const Header = () => {

  return (
    <HeaderContainer>
      <Title>
        Do this, do that
    </Title>
      <CustomCheckbox />
    </HeaderContainer>
  )
}

const Title = styled.h1`
  color:#fff;
  font-family: Manrope;
  text-align: center;
`

const HeaderContainer = styled.header`
background-color:#C8B8DB;
min-width: 100%;
`