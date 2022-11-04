import React from 'react';
import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>Technigo bootcamp project: To-do List</p>
      <p>Created by Annika Gadman</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
width: 100%;
height: 100px;
font-size: 12px;
text-align: center;
margin-top: 50px;
`