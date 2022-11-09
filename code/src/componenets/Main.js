/* eslint-disable linebreak-style */
import React from 'react'
import background from 'images/hitit.jpg';
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
background-image: url(${background});
background-size: cover;
min-height: 150vh;
display: flex;
position: relative;
align-items: center;
justify-content: center;
`