import React from 'react';
import styled from 'styled-components';
import { Counter } from 'components/Counter'
import HeroVideo from 'components/Images/HeroVideo.mp4'

const date = new Date();
const todaysDate = date.toString().slice(0, 15);

export const Header = () => {
  return (
    <Head>
      <Hero
        autoPlay
        muted
        loop
        playsinline
        className="hero-video"
        src={HeroVideo} />
      <Div>
        <TodaysDate>{todaysDate}</TodaysDate>
        <H1>
          Todays ToDos!
        </H1>
        <Counter />
      </Div>

    </Head>
  );
};

const Head = styled.div`
// border: solid black 2px;
// background-color: #E0DDCD;
width:100%
height: 65vh;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`
const Hero = styled.video`
width: 100%;
height: 100%;
object-fit: cover; 
// @media (max-width: 668px) {
// display: none;
//   }


`
const Div = styled.div`
// border: solid blue 2px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
position: absolute; 
background: rgb(240, 235, 224);
padding: 10px;
border-radius: 15px;
 @media (max-width: 430px) {
width: 100%;
}
`
const H1 = styled.h1`
// border: solid red 2px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
`
const TodaysDate = styled.div`
// border: solid green 2px;
color: grey;
display: flex;
margin: 20px 0 0 0;
`
