import React from 'react'

import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: center;
  background-color: yellow;
  width: 80%;
`

const Title = styled.h2`
  font-size: 20px;
`

export const Header = () => {
  return (
    <Container>
      <Title>
        Monday, March 7th
      </Title>
    </Container>
  )
}