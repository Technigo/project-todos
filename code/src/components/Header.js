import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

export const Header = () => {
  const date = moment().format("dddd MMM Do")

  return (
    <HeaderWrapper>
      <Text>Todos</Text>
      <Date>{date}</Date>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.section`
  width:100vw;
  height: 100px;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  padding: 10px;
  opacity:0.5;

  @media (max-width: 413px) {
    flex-direction: column;   
  }
`

const Text = styled.p`
  font-size: 40px;
  font-weight: bold;
  font-family: 'Acme', sans-serif;
  @media (max-width: 413px) {
    margin: 0;
  }
`
const Date = styled.p`
  font-size: 25px;
  margin-left: 25px;
  font-family: 'Roboto Mono', monospace;
  @media (max-width: 413px) {
    margin: 0;
  }
`