import React from 'react';
import styled from 'styled-components';

// image
import illustration2 from 'assets/images/Podcast_DrawKit_Vector_Illustrations copy.png';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// components
import { Illustration } from './Header';

const IconButton = styled.a`
text-decoration: none;
display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--btn-color);
    color: #fff;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
    text-align: center;
    line-height: 1.1;
    transition: 220ms all ease-in-out;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.35em;
    border-radius: 50%;
    margin-left: 1rem;
    &:hover, &:active {
        transform: scale(1.1);
    };
    &:focus {
        outline-style: solid;
        outline-color: transparent;
        box-shadow: 0 0 0 4px var(--btn-border);
    };
    &:not(.icon-button) {
        padding: 0.25em 0.75em;
        min-width: 10ch;
        min-height: 44px;
        border-radius: 8px;
    };
    &:disabled {
        background-color: var(--btn-disabled);
    };
`

const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;`

const FooterText = styled.p`
margin: 0 auto 1rem auto;`

const Footer = () => {
  return (
    <FooterContainer>
      <Illustration src={illustration2} alt="illustration" />
      <FooterText>A website created by Nino Aquilon @Technigo &apos;23.</FooterText>
      <section className="contact">
        <IconButton href="https://www.github.com" className="button icon-button" aria-label="Go to my Github">
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
        <IconButton href="https://www.github.com" className="button icon-button" aria-label="Go to my LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </IconButton>
      </section>
    </FooterContainer>
  )
};

export default Footer;