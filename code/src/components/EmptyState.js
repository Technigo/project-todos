import React from 'react';
import styled from 'styled-components';

export const EmptyState = () => {
  return (
    <Wrapper>
      <Title> You finished the whole list! Time for some fun!</Title>
      <Video src="../assets/movie.mp4" style={{ height: '80vh' }} loop autoPlay muted />
    </Wrapper>
  )
};

const Wrapper = styled.section`
display:flex;
flex-direction:column;`

const Title = styled.h1`
font-family: 'Dongle', sans-serif;
font-size: 1.5rem;
color:black;
margin-top: 0;
margin-bottom: 0;
margin-right: 15px;
margin-left:15px;
text-align: center;
`

const Video = styled.video`
background-position:center;
z-index:999;`