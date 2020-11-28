import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;

  @media (max-width: 280px) {
    padding-bottom: 10px;
  }
`
const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #5b3f5e;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 280px) {
    font-size: 20px;
  }
`
const Span = styled.span`
  font-weight: 300;
`

export const Header = () => {
  return (
    <Container>
      <Title>
        things to do <Span>{moment().format('D[/]M')}</Span>
      </Title>
    </Container>
  )
}