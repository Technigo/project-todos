import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/calender';
import styled from 'styled-components';

const div = styled.div`
  margin-right: 40px;
`

export const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
        />
      </div>
    );
  }