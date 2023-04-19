import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterStyled>
      <a href="https://fiona-klacar-portfolio.netlify.app/"> <img src="/images/Fiona.jpg" className="contact-logo" alt="link to Fiona's portfolio" /></a>
      <p>Created by Fiona Klacar | Technigo Web Development Bootcamp Spring 2023</p>
    </FooterStyled>
  )
}

export default Footer;

/* STYING FOR FOOTER */

const FooterStyled = styled.footer`
    align-self: center;
`
