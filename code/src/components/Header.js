import React from 'react'

import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;
  padding: 20px;
  width: 80%;
`

const Title = styled.h2`
  font-size: 20px;
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
`

export const Header = () => {
  return (
    <Container>
      <Title>
        Monday, March 7th
      </Title>
      <Icon
        src="https://i.pinimg.com/originals/ff/22/c6/ff22c66b5f7d9b60ec981b2f7411ed0d.png"
        alt="calender"
      />
    </Container>
  )
}