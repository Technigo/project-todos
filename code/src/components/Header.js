import React from 'react';
import styled from 'styled-components';
import Summary from './Summary';

const Wrapper = styled.div`
display: flex; 
background-color: white; 
padding: 2em;
margin: 2em; 
justify-content: space-evenly;
background-color: #e7b3b3;   `

const Heading = styled.h1`
color: #575151; 
font-size: 5em; 
font-family: 'Reenie Beanie';
background-color: #e7b3b3; 
padding: 30px; `

const Header = () => {
  return (
    <Wrapper>
      <Heading>TODO LIST </Heading>
      <Summary />
    </Wrapper>
  )
}

export default Header