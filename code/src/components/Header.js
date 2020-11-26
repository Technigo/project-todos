import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
`
const Title = styled.h2`
  font-size: 36px;
  font-family: 'Yeseva One', cursive;
  margin: 0;
  color: #5b3f5e;
`

export const Header = () => {
  return (
    <Container>
      <Title>
        things to do {moment().format('D[/]M')}
      </Title>
    </Container>
  )
}