import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #b4c4b2;
font-size: 10px;
font-family: 'Quicksand', sans-serif;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Designed by Andrea Hedström 2023</h2>
    </FooterWrapper>
  )
}

export default Footer;