import React from 'react';
// import styled from 'styled-components/macro';
import { MainSections, MainText, MainFooter, InnerWrapper } from '../styles/mainStyles';

const Footer = () => {
  return (
    <MainSections coloredBackground>
      <InnerWrapper>
        <MainText>This is a project made by Linda Malm for educational purposes</MainText>
        <MainFooter href="https://github.com/malmen237/project-todos">Check out my code in GitHub</MainFooter>
      </InnerWrapper>
    </MainSections>
  )
}

export default Footer;
