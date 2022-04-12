import React from 'react'
import styled from 'styled-components'

const FooterText = styled.p`
  color: linen;
  text-align: center;
  line-height: 30px;
  margin-top: 150px;
  font-family: 'Quicksand', sans-serif;
`


const Footer = () => {
    return (
        <FooterText>
            Made by Camilla Hallberg<br></br>
            Technigo Web Development Bootcamp Spring 2022 🤖
        </FooterText>
    )
}

export default Footer