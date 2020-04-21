import React from 'react'
import styled from 'styled-components/macro'

const TitleWrapper = styled.section`
  margin: 10px auto;
  padding-top: 15px;
  width: 90%;
`

const Title = styled.h1`
  margin: 0;
  color: #3e3e2d;
  font-family: 'Playfair Display';
  font-size: 2em;
`

export const TitleContainer = () => {
  return (
    <TitleWrapper>
      <Title>B. Productive</Title>
    </TitleWrapper>
  )
}