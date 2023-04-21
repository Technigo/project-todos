import React from 'react'
import styled from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'

const Footer = () => {
  return (
    <>
      <GlobalStyle />
      <FooterStyled>
        <MadeBy>Created by Fiona Klacar | Technigo Web Development Bootcamp Spring 2023</MadeBy>
        <IconsContainer>
          <a href="https://www.linkedin.com/in/fiona-klacar/" target="_blank" rel="noopener noreferrer">
            <Icon
              src="/images/linkedin.svg"
              alt="LinkedIn icon"
              aria-label="view Fiona's linkedIn page" />
          </a>
          <a href="https://github.com/FionaKlacar" target="_blank" rel="noopener noreferrer">
            <Icon
              src="/images/github.svg"
              alt="GitHub icon"
              aria-label="view Fiona's GitHub page" />
          </a>
          <a href="https://fiona-klacar-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Icon
              src="/images/laptop.svg"
              alt="link to Fiona's portfolio"
              aria-label="view Fiona's portfolio" />
          </a>
        </IconsContainer>
      </FooterStyled>
    </>
  )
}

export default Footer;

/* STYING FOR FOOTER */

const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    gap: 20px;
`

const MadeBy = styled.p`
    font-family: 'Quicksand', serif;
    `
const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;

`
const Icon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;

    &:hover {
      transform: scale(1.2);
    }
    `
//  would like to try and add animation in future
/* animation: bounce 1s infinite alternate; */
