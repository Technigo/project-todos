import React from 'react';
import { Lottie } from '@crello/react-lottie';
import animationData from '../lotties/calender';
import styled from 'styled-components';

const LottieContainer = styled.div`
 display: flex;
 justify-content: center;
`

export const LottieAnimation = () => (
  <LottieContainer className="lottie-container-basic">
      <Lottie
          width="300px"
          height="300px"
          config={{ animationData: animationData, loop: true, autoplay: true }}>
      </Lottie>
  </LottieContainer>
)
