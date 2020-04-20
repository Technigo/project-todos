import React from 'react'
import styled from 'styled-components'
import img from 'components/header_nike.png'

export const Header = () => {

  return (
    <StyledHeader>
      <StyledBackground>
      </StyledBackground>
      <StyledText>Just do it!</StyledText>
    </StyledHeader>
  )
}
const StyledHeader = styled.header`
 background-color:#1e3756;
 border-radius: 100% 0% 100% 0% / 0% 79% 55% 100% ;
 height: 150px;
`
const StyledText = styled.text`
color: #FFFF;
display: flex;
flex-direction: column;
padding: 40px;
font-size: 48px;
font-weight: 700;
font-family: 'niveau-grotesk', sans-serif ;
font-style: italic;
`
const StyledBackground = styled.div`
background-color:#f18666;
height: 50px;
width: 100%;
border-bottom-right-radius: 55% 120%;
`