import React from 'react'
import styled from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'

const Footer = () => {
  return (
    <>
      <GlobalStyle />
      <FooterStyled>
        <a href="https://fiona-klacar-portfolio.netlify.app/">
          <Picture
            src="/images/Fiona.jpg"
            className="contact-logo"
            alt="link to Fiona's portfolio" />
        </a>
        <p>Created by Fiona Klacar | Technigo Web Development Bootcamp Spring 2023</p>
      </FooterStyled>
    </>
  )
}

export default Footer;

/* STYING FOR FOOTER */

const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
`
const Picture = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
    opacity: .75;

    &:hover {
      /* animation: bounce 1s infinite alternate; */
      transform: scale(1.2);
    }
    `