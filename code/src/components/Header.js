import React from 'react'

import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  width: 100%;
`
const Title = styled.h2`
  font-size: 36px;
  font-family: 'Yeseva One', cursive;
  margin: 0;
`

export const Header = () => {
  return (
    <Container>
      <Title>
        things to do
      </Title>
    </Container>
  )
}