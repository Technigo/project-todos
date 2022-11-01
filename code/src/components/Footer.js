import React from 'react';
import styled from 'styled-components/macro';
import { MainSections, MainFooter, InnerWrapper } from '../styles/mainStyles';

const Footer = () => {
  return (
    <MainSections coloredBackground>
      <InnerWrapper>
        <FooterText>This is a project made made by Linda Malm for educational purposes</FooterText>
        <MainFooter href="https://github.com/malmen237/project-todos">Watch the code in github</MainFooter>
      </InnerWrapper>
    </MainSections>
  )
}

export default Footer;

const FooterText = styled(MainFooter)`
  cursor: auto;

  &:hover {
      text-decoration: none;
      color: white;
      transition: non;
      transform: scale(1.0);
    }
`