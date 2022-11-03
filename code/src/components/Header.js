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
          Todays Tasks
        </H1>
        <Counter />
      </Div>
    </Head>
  );
};

const Head = styled.div`
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

 @media (min-width: 750px) {
  height: 48vh;
}

`
const Div = styled.div`
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
background:  rgb(240, 235, 224);
margin: 30px;
}
`
const H1 = styled.h1`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
`
const TodaysDate = styled.div`
color: grey;
display: flex;
margin: 20px 0 5px 0;
`
