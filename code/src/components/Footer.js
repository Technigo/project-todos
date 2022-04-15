import React from 'react'
import styled from 'styled-components'

const FooterText = styled.p`
  color: linen;
  text-align: center;
  line-height: 28px;
  margin-top: 150px;
  font-family: 'Quicksand', sans-serif;

  @media (min-width: 768px) {
    margin-top: 180px;
  }
`

const Footer = () => {
    return (
        <FooterText>
          Made by Camilla Hallberg<br></br>
          Technigo Web Development Bootcamp Spring 2022 <span role="img" aria-label="robot emoji">🤖</span>
        </FooterText>
    )
}

export default Footer