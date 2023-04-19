import React from 'react'
import styled from 'styled-components'
import arrow from './images/arrow.png'

export const Header = () => {
  return (
    <HeaderSection>
      <H1>What to do?</H1>
      <Arrow src={arrow} alt="arrow" />
    </HeaderSection>
  )
}

const HeaderSection = styled.section`
display: flex;
align-self: stretch;
align-items: center;
justify-content: center;
background-color: black;
color: white;
font-family: 'Courier New';
padding: 20px;
border: solid red 2px;
`

const H1 = styled.h1`
margin: unset;
font-size: 20px;
`

const Arrow = styled.img`
transform: rotate(30deg);
position:relative;
margin-bottom: -25%;

`

