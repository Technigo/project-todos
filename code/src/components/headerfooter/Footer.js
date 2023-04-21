import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { ContactMeStyles, FooterStyles } from './Footer.styles';

export const Footer = () => {
  return (
    <FooterStyles>
      <ContactMeStyles>
        <a href="https://www.linkedin.com/in/bridget-mailley/"><FontAwesomeIcon icon={faLinkedin} alt="link to LinkedIn" className="contact-logo" /></a>
        <a href="https://bridgetmailley.com/"><img src="/assets/bridget.jpg" alt="link to Bridget's portfolio" /></a>
        <a href="https://github.com/beemailley"><FontAwesomeIcon icon={faGithub} alt="link to GitHub" className="contact-logo" /></a>
      </ContactMeStyles>
      <div>
        <p>Designed by Bridget Mailley. Technigo Web Development Bootcamp 2023.</p>
        <p>Images from <a href="http://www.freepik.com">Freepik</a></p>
      </div>
    </FooterStyles>
  )
}