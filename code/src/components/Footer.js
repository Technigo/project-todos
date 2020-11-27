import React from 'react';

import technigoLogo from '../assets/logo.svg';
import { FooterContainer, FooterText, FooterImage, Links } from './StyledComponents/FooterStyling';


export const Footer = () => {
  return (
      <FooterContainer>
        <FooterText>© 2020 Sofia Vaz Sousa</FooterText>
        <FooterText>
          <Links href="https://www.linkedin.com/in/sofiavazsousa/" target="_blank" rel="noopener noreferrer">LinkedIn</Links>
              |
          <Links href="https://github.com/sofiavazs" target="_blank" rel="noopener noreferrer">GitHub</Links>
        </FooterText>
        <FooterImage src={technigoLogo} alt="technigo logo" />
        <FooterText>Project developed during the Technigo frontend development bootcamp</FooterText>
      </FooterContainer>
  );
};