import React from 'react'
import styled from 'styled-components'

export const Header = () => {


  return (
    <StyledHeader>
      <StyledText>Just do it!</StyledText>
    </StyledHeader>

  )
}
const StyledHeader = styled.header`
 background-color:#1e3756;
 padding-left: 20px;
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