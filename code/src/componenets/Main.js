/* eslint-disable linebreak-style */
import React from 'react'
/* import background from 'images/hitit.jpg'; */
import styled from 'styled-components/macro';

const Main = () => {
  return (
    <Background>
      <InnerWrapper>
        <h1>Här ska det vara en snygg bakgrundsbild</h1>
      </InnerWrapper>
    </Background>
  )
}
export default Main;

const Background = styled.main`
background-color: blue;
`
const InnerWrapper = styled.div`
background-color: red;
`