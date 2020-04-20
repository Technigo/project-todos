import React from 'react'
import styled from 'styled-components'

export const Header = () => {


  return (
    <StyledHeader>
      <StyledBackground></StyledBackground>
      <StyledText>Just do it!</StyledText>
    </StyledHeader>


  )
}
const StyledHeader = styled.header`
 background-color:#1e3756;
 border-radius: 100% 0% 100% 0% / 0% 79% 55% 100% ;
 height: 200px;
`
const StyledText = styled.text`
color: #FFFF;
display: flex;
flex-direction: column;
padding: 50px;
font-size: 48px;
font-weight: 700;
font-family: 'niveau-grotesk', sans-serif ;
font-style: italic;
`
const StyledBackground = styled.div`
 background-color:#f18666;
 height: 70px;
 width: 100%;
 border-bottom-left-radius: 55% 100%;
`