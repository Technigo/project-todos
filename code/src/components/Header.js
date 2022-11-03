import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex; 
padding: 2em;
margin: 2em; 
justify-content: space-evenly;
background-color: #070f4e;   `

const Heading = styled.h1`
color: #f5ebeb; 
font-size: 5em; 
font-family: 'Reenie Beanie';
 
padding: 30px; `

const Header = () => {
  return (
    <Wrapper>
      <Heading>TODO LIST </Heading>
    </Wrapper>
  )
}

export default Header