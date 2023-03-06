import React from 'react';
import styled from 'styled-components/macro';
import { MainSections, MainText, MainFooter, InnerWrapper } from '../styles/mainStyles';
import piImg from './pi.png';
import linuxImg from './linux.png';

const Footer = () => {
  return (
    <MainSections coloredBackground>
      <InnerWrapper>
        <MainText>This is a project made by Linda Malm for educational purposes</MainText>
        <MainFooter href="https://github.com/malmen237/project-todos">Check out my code in GitHub</MainFooter>
        <MainText>This page is hosted on a server that is built by me.</MainText>
        <ImageWrapper>
          <Pi src={piImg} alt="raspberry pi logo" />
          <Linux src={linuxImg} alt="linux penguin logo" />
        </ImageWrapper>
      </InnerWrapper>
    </MainSections>
  )
}

export default Footer;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`

const Linux = styled.img`
  display: block;
  height: 80px;
  width: auto;
`

const Pi = styled.img`
  display: block;
  margin-top: 1.5%;
  height: 45px;
  width: auto;
`
