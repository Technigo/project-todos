import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex; 
background-color: white; 
padding: 2em;
justify-content: center; 
grid-column: span 1 / 2;  `

const Heading = styled.h1`
color: yellow; `

const Header = () => {
  return (
    <Wrapper>
      <Heading>TODO LIST </Heading>
    </Wrapper>
  )
}

export default Header