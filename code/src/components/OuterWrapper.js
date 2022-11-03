import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import Footer from './Footer';
import Main from './Main';

const OuterWrapper = () => {
  return (
    <OuterWrapperStyle>
      <Main />
      <Footer />
    </OuterWrapperStyle>
  );
};

export default OuterWrapper;

// Animations for background picture to appear
const imageAppear = keyframes`
0% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0.9;
  }
`;

// Blurs the background image after content has loaded
const blur = keyframes`
  0% {
    backdrop-filter: blur(0px);
  }
  60% {
    backdrop-filter: blur(0px);
  }
  75% {
    backdrop-filter: blur(0px);
  }
  100% {
    backdrop-filter: blur(1px);
  }
`;

const OuterWrapperStyle = styled.div`
  z-index: 0;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  // Background image on ::before pseudo element so opacity is set only on background
  &::before {
    opacity: 0.9;
    content: '';
    background-image: url('/Assets/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    animation: ${imageAppear} 4s;
  }

  // I don't remember why I did this ::after but now it adds a blur to the background image :)
  &::after {
    z-index: 1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    animation: ${blur} 4s;
    backdrop-filter: blur(1px);
  }
`;
