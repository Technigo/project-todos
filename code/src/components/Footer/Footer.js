import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FooterContainer,
  FooterText,
  FooterLinkWrapper,
  FooterLinkBox } from './Footer.style';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
      A Technigo To Do-App made by: Ylva Karlsson
      </FooterText>
      <br />
      <FooterLinkWrapper>
        <FooterLinkBox>
          <a href="https://github.com/YlvaKarlsson">
            <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
          </a>
        </FooterLinkBox>
        <FooterLinkBox>
          <a href="https://www.linkedin.com/in/ylvakarlsson87/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
          </a>
        </FooterLinkBox>
        <FooterLinkBox>
          <a href="mailto:ylva_87@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
          </a>
        </FooterLinkBox>
      </FooterLinkWrapper>
    </FooterContainer>
  )
}