/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
/* import logoImage from '../assets/To-Do List-logos-1/To-Do List-logos_white.png' */

const InnerWrapper = styled.section`
display: flex;
width: 70vw;
`

const OuterWrapper = styled.section`
display: flex;
flex-direction: column;
margin: 10px;`

const Title = styled.h3`
font-weight: 700px;
font-size: 60px;
color: #F2B807;
margin-bottom: 20px;`

export const Header = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <div className="lazy-cat">
          <Player
            autoplay
            loop
            src="https://lottie.host/e1545cc9-29b0-4fc7-bf99-cba9800c4de6/LHo0WS7dLJ.json"
            style={{ height: '150px', width: '150px' }}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </div>
      </InnerWrapper>
      <Title>To-Do List</Title>
    </OuterWrapper>
  )
}