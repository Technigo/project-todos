import React from "react"
import styled from 'styled-components'


export const FatFooter = () => {

  return (
    <Footer>
      <Footertext>A</Footertext>
      <Footertext>LIST</Footertext>
      <Footertext>OF</Footertext>
      <Footertext>THINGS</Footertext>
      <Footertext>THAT</Footertext>
      <Footertext>I</Footertext>
      <Footertext>WILL</Footertext>
      <Footertext>DO</Footertext>
      <Footertext>SOMETIME</Footertext>
      <Footertext>IN</Footertext>
      <Footertext>THE</Footertext>
      <Footertext>FUTURE</Footertext>
      <Footertext><span>🙌🙌</span></Footertext>
      <Footertext>By Nina Månsson, Technigo 2020</Footertext>
    </Footer>
  )
}

const Footer = styled.div`
background-color: firebrick;
width: 350px;
height: auto;
padding: 20px;
`

const Footertext = styled.h4`
font-family: 'Roboto', sans-serif;
font-weight:500;
font-size: 13px;
color: white;
margin: 2px;
`