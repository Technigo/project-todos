/* eslint-disable linebreak-style */
import React from 'react'
import background1 from 'images/hititone.jpg';
import background2 from 'images/hitittwo.jpg';
import styled from 'styled-components/macro';

const Main = () => {
  return (
    <div>
      <Background />
    </div>
  )
}
export default Main;

const Background = styled.main`
background-image: url(${background1});
background-size: cover;
min-height: 150vh;
display: flex;
position: relative;
align-items: center;
justify-content: center;

@media (min-width: 1024px) {
  background-image: url(${background2});
  }
`