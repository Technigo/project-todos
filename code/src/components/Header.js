import React from 'react'
import styled from 'styled-components'

export const Header = () => {

  return (
    <HeaderContainer>
      <Title>
        Do this, do that
    </Title>
    </HeaderContainer>
  )

}

const Title = styled.h1`
  font-family: Manrope;
`

const HeaderContainer = styled.header`
background-color:#C8B8DB;
`