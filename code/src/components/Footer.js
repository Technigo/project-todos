import React from 'react';
import { Foot, FootParagraph } from './Styling/GlobalStyle'

export const Footer = () => {
  return (
    <Foot>
      <a
        className="icon"
        href="https://www.linkedin.com/in/johannaleonsson/"
        aria-label="Link to Johannas Linkedin"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin-in" />
      </a>

      <a
        className="icon"
        href="https://github.com/JohLeo"
        aria-label="Link to Johannas GitHub"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <FootParagraph>Designed and created by<br />
        <a href="mailto:johanna@leonsson.se">Johanna Leonsson</a>
      </FootParagraph>
    </Foot>
  );
}
