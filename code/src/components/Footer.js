import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
margin-top: 80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: rgb(86, 113, 143);
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