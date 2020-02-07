import React from "react"
import styled from 'styled-components'


export const FatFooter = () => {

  return (
    <Footer>

      <Footertext>By Nina Månsson, Technigo 2020</Footertext>
    </Footer>
  )
}

const Footer = styled.div`
background-color: #f7f7fc;
width: 350px;
height: auto;
padding: 20px;
margin-bottom: 50px;
`

const Footertext = styled.h4`
font-family: 'Roboto', sans-serif;
font-weight:600;
font-size: 13px;
color: darkblue;
margin: 2px;
`